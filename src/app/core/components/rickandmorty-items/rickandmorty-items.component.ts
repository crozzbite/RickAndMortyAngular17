import { Component, ComponentRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Character } from '../../models/character.model';
import { CommonModule } from '@angular/common';
import { RickAndMortyModalComponent } from '../../../rick-and-morty-modal/rick-and-morty-modal.component';

@Component({
  selector: 'app-rickandmorty-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rickandmorty-items.component.html',
  styleUrl: './rickandmorty-items.component.scss'
})
export class RickandmortyItemsComponent {
  @Input() RnMInfo!: Character;

  // Contenedor para el componente dinámico
  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;
  private modalRef!: ComponentRef<RickAndMortyModalComponent>;

  openModal() {
    // Limpia cualquier modal existente
    this.modalContainer.clear();

    // Crea el componente dinámico
    this.modalRef = this.modalContainer.createComponent(RickAndMortyModalComponent);

    // Pasa los datos al modal
    this.modalRef.instance.RnMInfo = this.RnMInfo;

    // Escucha el evento de cierre
    this.modalRef.instance.close.subscribe(() => {
      this.closeModal();
    });
  }

  closeModal() {
    // Destruye el componente dinámico
    if (this.modalRef) {
      this.modalRef.destroy();
    }
  }

}
