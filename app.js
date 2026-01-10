import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  // TODO: Replace with your Firebase project config
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
};

const signInBtn = document.querySelector("#google-signin");
const signOutBtn = document.querySelector("#signout");
const authStatus = document.querySelector("#auth-status");
const lastSync = document.querySelector("#last-sync");
const loggedOutView = document.querySelector("#logged-out-view");
const loggedInView = document.querySelector("#logged-in-view");
const searchInput = document.querySelector("#powder-search");
const powderRows = document.querySelector("#powder-rows");

const now = new Date();
lastSync.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const powderInventory = [
  { name: "Signal Red", pounds: 18.4, brand: "Tiger Drylac" },
  { name: "Graphite Black", pounds: 4.1, brand: "Prismatic" },
  { name: "Silver Mist", pounds: 9.7, brand: "Sherwin-Williams" },
  { name: "Marine Blue", pounds: 12.0, brand: "Powder365" },
  { name: "Sunset Bronze", pounds: 6.5, brand: "Cardinal" },
  { name: "Ultra White", pounds: 23.2, brand: "AkzoNobel" },
];
let searchBound = false;

const bindSearch = () => {
  if (!searchInput) return;
  if (searchBound) {
    searchInput.removeEventListener("input", handleSearch);
    searchInput.removeEventListener("search", handleSearch);
  }
  searchInput.addEventListener("input", handleSearch);
  searchInput.addEventListener("search", handleSearch);
  searchBound = true;
};

const formatPounds = (value) => `${value.toFixed(1)} lb`;

const renderInventory = (items) => {
  if (!powderRows) return;
  powderRows.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "inventory-empty";
    empty.textContent = "No powders match that search.";
    powderRows.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "powder-pill";
    row.innerHTML = `
      <span class="pill-name">${item.name}</span>
      <span class="pill-poundage">${formatPounds(item.pounds)}</span>
      <span class="pill-brand">${item.brand}</span>
    `;
    powderRows.appendChild(row);
  });
};

const handleSearch = () => {
  const query = (searchInput?.value ?? "").trim().toLowerCase();
  if (!query) {
    renderInventory(powderInventory);
    return;
  }
  const filtered = powderInventory.filter((item) => {
    return (
      item.name.toLowerCase().includes(query) ||
      item.brand.toLowerCase().includes(query) ||
      formatPounds(item.pounds).toLowerCase().includes(query)
    );
  });
  renderInventory(filtered);
};

bindSearch();

const isPlaceholderConfig = (config) =>
  Object.values(config).some((value) => String(value).includes("YOUR_"));

const resolveFirebaseConfig = async () => {
  if (window.FIREBASE_CONFIG) {
    return window.FIREBASE_CONFIG;
  }

  if (!isPlaceholderConfig(firebaseConfig)) {
    return firebaseConfig;
  }

  try {
    const response = await fetch("/__/firebase/init.json", { cache: "no-store" });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn("Unable to load Firebase config from hosting.", error);
  }

  return null;
};

const bootstrapAuth = async () => {
  const resolvedConfig = await resolveFirebaseConfig();

  if (!resolvedConfig) {
    authStatus.textContent = "Missing Firebase config.";
    signInBtn.disabled = true;
    return;
  }

  const app = initializeApp(resolvedConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  signInBtn.addEventListener("click", async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      if (
        error?.code === "auth/popup-blocked" ||
        error?.code === "auth/popup-closed-by-user" ||
        error?.code === "auth/cancelled-popup-request"
      ) {
        await signInWithRedirect(auth, provider);
        return;
      }
      console.error("Google sign-in failed", error);
      authStatus.textContent = "Sign-in failed. Check console.";
    }
  });

  signOutBtn.addEventListener("click", async () => {
    await signOut(auth);
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      authStatus.textContent = `Signed in as ${user.displayName ?? "User"}`;
      signOutBtn.hidden = false;
      signInBtn.hidden = true;
      loggedOutView.hidden = true;
      loggedInView.hidden = false;
      if (searchInput) {
        searchInput.value = "";
      }
      bindSearch();
      handleSearch();
    } else {
      authStatus.textContent = "Not signed in";
      signOutBtn.hidden = true;
      signInBtn.hidden = false;
      loggedOutView.hidden = false;
      loggedInView.hidden = true;
    }
  });
};

bootstrapAuth();
