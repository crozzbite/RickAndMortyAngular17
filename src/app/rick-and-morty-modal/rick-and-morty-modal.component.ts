import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../core/models/character.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rick-and-morty-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rick-and-morty-modal.component.html',
  styleUrl: './rick-and-morty-modal.component.scss'
})
export class RickAndMortyModalComponent {
  @Input() RnMInfo!: Character; // Recibe los datos del personaje
  @Output() close = new EventEmitter<void>(); // Emite un evento para cerrar el modal

  closeModal() {
    this.close.emit(); // Emite el evento de cierre
  }
}


