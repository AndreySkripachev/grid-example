import { GridStack  } from "gridstack";

const container = document.getElementById('grid-stack')!;

const grid = new GridStack(container,
  { 
    handle: '.card-header' 
  },
);

grid.addWidget(
  `
  <div class="grid-stack-item">
    <div class="grid-stack-item-content">
    <div class="card-header">- Drag here -</div>
    <div class="card">the rest of the panel content doesn't drag</div>
    </div>
  </div>
  `,
  {
    w: 3, h: 3,
  }
);

grid.addWidget(
  `
  <div class="grid-stack-item">
    <div class="grid-stack-item-content">
    <div class="card">If there's no handler component, it's okay.</div>
    </div>
  </div>
  `,
  {
    w: 3, h: 3, content: ''
  },
);