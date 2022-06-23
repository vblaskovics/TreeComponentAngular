import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'src/app/interfaces/tree-node';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css']
})
export class TreeItemComponent implements OnInit {
  @Input() nodeData?: TreeNode;
  closed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNode(): void {
    console.log(this.nodeData?.label, 'clicked');
    this.closed = !this.closed;
  }

}
