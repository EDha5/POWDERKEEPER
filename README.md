# POWDERKEEPER
# 🧴🎨 PowderKeeper

**PowderKeeper** is a simple, fast inventory system for **powder coat / paint containers** — built for the real world where the only thing that matters is:

- *What color is this?*
- *How much is left?*
- *Which container is it?*

You enter a powder once (color + weight), **PowderKeeper assigns a container ID**, and you slap that number on the jug.  
From there, updating inventory is dead simple: **enter the container ID + new weight** and you’re done.

---

## ✨ What it does

✅ **Create a container record**
- Enter **color** and **weight**
- PowderKeeper generates a **unique container number**
- Put that number on the container (Sharpie/label maker/QR… you choose)

✅ **Update inventory in seconds**
- Grab a container, use some powder
- Type in the **container number**
- Enter the **new weight**
- PowderKeeper stores it (and keeps the history)

✅ **Search your stash instantly**
Search by:
- **Color name**
- **Brand**
- **Container number / ID**
- (Optional: part numbers, codes, internal naming conventions)

✅ **Know what you actually have**
Stop guessing. Stop opening lids. Stop “I think that’s the white… maybe.”

---

## 🧠 The workflow (how people actually use it)

### 1) Add a new powder container
1. Put the container on the scale
2. Enter its:
   - Color name (e.g. `Cardinal Super Durable Satin Black`)
   - Brand (e.g. `Cardinal`)
   - Starting weight (e.g. `18.4 lb`)
3. PowderKeeper gives you an ID like: `PK-0127`
4. Label the container: **PK-0127**

### 2) Update after using it
1. Put the container back on the scale
2. Enter:
   - Container ID: `PK-0127`
   - New weight: `16.9 lb`
3. Saved. Inventory updated. History preserved.

### 3) Find it later
- Search `black`
- Search `Cardinal`
- Search `PK-0127`
- Search your internal code like `C109-BK###` (if you store it)

---

## 🔎 Example searches

- `brand:Cardinal`
- `color:"Satin Black"`
- `id:PK-0127`
- `name:RAL 9005`

(Exact search syntax depends on your UI/CLI — but the concept is the same: **find anything fast**.)

---

## Why PowderKeeper exists

If you do powder coating (or any paint inventory), you’ve felt this pain:

- Containers with “sort of” labels
- Multiple blacks that aren’t the same black
- Powder mysteriously running out mid-job
- “We totally have enough” (narrator: *they did not*)

PowderKeeper turns your shelves into a **traceable system** — without being a bloated ERP.

---

## 🧰 Features

- **Container ID system** (print it, write it, QR it — your call)
- **Weight tracking** per container
- **Update-by-ID** workflow (fast shop-floor usage)
- **Searchable database**
- **Inventory history** (see weight changes over time)

---

## 🗺️ Roadmap (ideas)

- QR code labels for instant scan + update
- “Low stock” alerts per powder
- Multiple locations (Rack A / Rack B / Trailer / Jobsite)
- Import/export (CSV)
- Mix tracking (e.g., blended powders / custom batches)
- Job usage notes (“Used on PO 29093 rails”)

---

## 🤝 Contributing

If you use PowderKeeper in a shop and have ideas that make the workflow faster, simpler, or more bulletproof:
- Open an issue
- Submit a PR
- Or just write up how you’d want it to work

The goal is **speed + clarity**, not complexity.

---

## 📄 License

Pick your license (MIT is common for projects like this).  
If you haven’t chosen one yet, add a `LICENSE` file so people know how they can use it.

---

## ⭐ If this saves you from “mystery powder” problems

Give it a star — or better yet, send a photo of your labeled containers. 😄
