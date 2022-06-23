import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TreeNode } from 'src/app/interfaces/tree-node';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css'],
})
export class TreeItemComponent implements OnInit {
  @Input() nodeData?: TreeNode;
  @Output() deleteMe: EventEmitter<TreeNode> = new EventEmitter<TreeNode>();
  @ViewChild('RenameInput') inputEl!: ElementRef;
  closed: boolean = false;
  editmode: boolean = false;

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

  clickRename(event: Event): void {
    event.stopPropagation();
    this.editmode = true;

    // Késleltetjük az input mező elérését, mert ebben a pillanatban még nincs benne a DOM-ban az ngIf miatt
    setTimeout(() => {
      this.inputEl.nativeElement.focus();
    });
  }

  renameLabel() {
    this.editmode = false;
    this.nodeData!.label = this.inputEl.nativeElement.value;
  }

  deleteItem(nodeData: TreeNode): void {
    console.log(this.nodeData?.label, 'törli ->', nodeData.label);
    this.nodeData!.items = this.nodeData!.items!.filter(
      (item) => item !== nodeData
    );
  }
}
