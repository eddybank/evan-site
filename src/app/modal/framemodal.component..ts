import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SIFrameComponent } from '../projects/s-iframe/s-iframe.component';

@Component({
	selector: 'frame-modal-content',
	standalone: true,
  imports: [SIFrameComponent],
	template: `
		<div class="modal-header">
			<h2 class="modal-title">Solitaire Menu</h2>
		</div>
		<div class="modal-body">
			<solitaire-iframe></solitaire-iframe>
		</div>
		<div class="modal-footer">
			<button type="button" class="modal-btn" (click)="activeModal.close('Close click')">Close</button>
		</div>
	`,
})
export class FrameModalContent {

	constructor(public activeModal: NgbActiveModal) {}
}

@Component({ 
  selector: 'frame-modal-component',
  templateUrl: './framemodal.component.html',
  styleUrls: ['./framemodal.component.css']
})
export class FrameModalComponent {
	constructor(private modalService: NgbModal) {}

	open() {
		this.modalService.open(FrameModalContent);
	}
}