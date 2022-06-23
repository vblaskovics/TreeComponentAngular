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
          label: 'Mappa2',
        },
        {
          label: 'Mappa3',
          items: [
            {
              label: 'Mappa5',
            },
            {
              label: 'Mappa6',
            },
          ],
        },
        {
          label: 'Mappa4',
        },
      ],
    };
  }

  getTree(): TreeNode {
    return this.tree;
  }
}
