# PowderKeeper

PowderKeeper is a lightweight inventory system for powder coat (and paint) containers. It assigns a unique container ID to each entry, tracks weight over time, and makes it easy to find materials by color, brand, or container number.

---

## Overview

Shops don’t lose time because they lack “inventory software”—they lose time because the workflow is slow:

- Containers are inconsistently labeled
- Similar colors get mixed up
- Remaining quantity is unknown until it’s too late
- Updates are annoying, so they don’t happen

PowderKeeper solves this with a simple, repeatable process:

1. **Create a container record** (color + initial weight)  
2. **Get a unique container ID**  
3. **Label the container with that ID**  
4. **Update weight by ID whenever it’s used**  
5. **Search inventory instantly** by name/brand/ID

---

## Key Features

- **Container ID assignment**  
  Generates a unique identifier for each container and uses it as the primary key for updates.

- **Weight tracking**  
  Store and update container weights with a consistent, shop-friendly workflow.

- **Fast updates**  
  After material is used, update inventory by entering:
  - container ID  
  - new weight

- **Searchable inventory**  
  Search records by:
  - color/name  
  - brand  
  - container ID / number on the container

- **Inventory history (optional/if enabled)**  
  Preserve previous weights to understand usage trends and prevent surprises.

---

## Standard Workflow

### 1) Add a container
Record a new powder/paint container by entering its identifying information and starting weight. PowderKeeper returns a unique container ID to label the physical container.

**Inputs**
- Color / Name
- Brand
- Starting weight

**Output**
- Container ID (apply to the container label)

### 2) Update after use
When the container is used, record the new weight by referencing the container ID.

**Inputs**
- Container ID
- New weight

**Result**
- Inventory updated and stored in the database

### 3) Find inventory
Use search to locate containers quickly by name, brand, or container ID—without opening lids or guessing.

---

## Data Model (Conceptual)

A typical record includes:

- **Container ID** (generated)
- **Color / Name**
- **Brand**
- **Current weight**
- **Last updated**
- *(optional)* change history / notes

---

## Use Cases

- Track remaining quantities to avoid running out mid-job
- Standardize labeling across shelves, racks, and job sites
- Quickly locate the correct material when multiple similar colors exist
- Maintain accurate counts without adding shop-floor friction

---

## Roadmap

Potential enhancements:

- QR code labels for scan-to-update
- Low-inventory thresholds and notifications
- Multi-location support (rack/bin mapping)
- CSV import/export
- Notes per update (job/PO reference)

---

## Contributing

Contributions are welcome. If you have ideas that improve speed, reliability, or shop usability:

1. Open an issue describing the workflow improvement
2. Submit a PR with a focused change
3. Include before/after behavior and any assumptions

---

## License

Add a `LICENSE` file to define usage terms (MIT is a common default).
