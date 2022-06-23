import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TreeNode } from 'src/app/interfaces/tree-node';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css'],
})
export class TreeItemComponent implements OnInit {
  @Input() nodeData?: TreeNode;
  @Output() deleteMe: EventEmitter<TreeNode> = new EventEmitter<TreeNode>();
  closed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  get isFolder(): boolean {
    return Array.isArray(this.nodeData?.items);
  }

  toggleNode(): void {
    console.log(this.nodeData?.label, 'clicked');
    this.closed = !this.closed;
  }

  clickDelete(event: Event): void {
    event.stopPropagation();
    this.deleteMe.emit(this.nodeData);
  }

  deleteItem(nodeData: TreeNode): void {
    console.log(this.nodeData?.label, 'törli ->', nodeData.label);
    this.nodeData!.items = this.nodeData!.items!.filter(
      (item) => item !== nodeData
    );
  }
}
