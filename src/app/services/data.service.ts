import { Injectable } from '@angular/core';
import { TreeNode } from '../interfaces/tree-node';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  tree: TreeNode;

  constructor() {
    this.tree = {
      label: 'Mappa1',
      items: [
        {
          label: 'Fájl1',
        },
        {
          label: 'Mappa3',
          items: [
            {
              label: 'Fájl2',
            },
            {
              label: 'Fájl3',
            },
          ],
        },
        {
          label: 'Fájl4',
        },
      ],
    };
  }

  getTree(): TreeNode {
    return this.tree;
  }
}
