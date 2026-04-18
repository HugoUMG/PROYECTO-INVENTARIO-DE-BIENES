import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
=======
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
>>>>>>> viejo/main
import { RouterLink } from '@angular/router';
import { Disposal } from '../../../core/models/api.models';
import { AssetsApiService } from '../../../core/services/assets-api.service';

@Component({
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormsModule],
=======
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
>>>>>>> viejo/main
  template: `
    <section class="shell">
      <div class="between"><h2>Bajas y Enajenación</h2><a class="back-link" routerLink="/menu">← Volver al menú</a></div>

      <div class="card">
        <form [formGroup]="requestForm" (ngSubmit)="requestDisposal()" class="grid grid-3">
          <label>ID activo
            <input type="number" formControlName="assetId" placeholder="Ej. 1" />
          </label>
          <label>Motivo
            <input formControlName="reason" placeholder="Ej. Fin de vida útil" />
          </label>
<<<<<<< HEAD
=======
          <label>Estado inicial de la solicitud
            <select formControlName="disposalType">
              <option value="SOLICITADA">SOLICITADA</option>
              <option value="APROBADA">APROBADA</option>
              <option value="RECHAZADA">RECHAZADA</option>
              <option value="EJECUTADA">EJECUTADA</option>
            </select>
          </label>
>>>>>>> viejo/main
          <label>Solicitado por
            <input formControlName="requestedBy" placeholder="Ej. jefe_inventarios" />
          </label>
          <button type="submit">Solicitar baja</button>
        </form>
      </div>

      <div class="card">
<<<<<<< HEAD
        <div class="between"><h3>Pendientes</h3><button type="button" (click)="loadPending()">Actualizar</button></div>
        <table *ngIf="pending.length">
          <thead><tr><th>ID</th><th>Activo</th><th>Motivo</th><th>Estado</th><th>Aprobado por</th><th>Valor final</th><th>Acciones</th></tr></thead>
          <tbody>
            <tr *ngFor="let disposal of pending">
              <td>{{ disposal.id }}</td><td>{{ disposal.asset.assetCode }}</td><td>{{ disposal.reason }}</td><td>{{ disposal.status }}</td>
              <td><input [(ngModel)]="approvals[disposal.id].approvedBy" [ngModelOptions]="{standalone: true}" placeholder="Aprobado por" /></td>
              <td><input type="number" [(ngModel)]="approvals[disposal.id].finalValue" [ngModelOptions]="{standalone: true}" placeholder="Valor final" /></td>
              <td>
                <button type="button" (click)="approveDisposal(disposal.id)">Aprobar</button>
                <button type="button" (click)="rejectDisposal(disposal.id)">Rechazar</button>
              </td>
            </tr>
          </tbody>
        </table>
=======
        <form [formGroup]="approveForm" (ngSubmit)="approveDisposal()" class="grid grid-3">
          <label>ID baja
            <input type="number" formControlName="id" placeholder="Ej. 1" />
          </label>
          <label>Aprobado por
            <input formControlName="approvedBy" placeholder="Ej. director_finanzas" />
          </label>
          <label>Valor final
            <input type="number" formControlName="finalValue" placeholder="Ej. 1200.00" />
          </label>
          <button type="submit">Aprobar baja</button>
        </form>
      </div>

      <div class="card">
        <div class="between"><h3>Pendientes</h3><button type="button" (click)="loadPending()">Actualizar</button></div>
        <ul><li *ngFor="let disposal of pending">#{{ disposal.id }} - {{ disposal.asset.assetCode }} - {{ disposal.status }}</li></ul>
>>>>>>> viejo/main
        <p *ngIf="message">{{ message }}</p>
      </div>
    </section>
  `
})
export class BajasPage implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(AssetsApiService);
  pending: Disposal[] = [];
<<<<<<< HEAD
  approvals: Record<number, { approvedBy: string; finalValue: number | null }> = {};
  message = '';

  readonly requestForm = this.fb.group({ assetId: [null, [Validators.required, Validators.min(1)]], reason: ['', Validators.required], requestedBy: ['', Validators.required] });
=======
  message = '';

  readonly requestForm = this.fb.group({ assetId: [null, [Validators.required, Validators.min(1)]], reason: ['', Validators.required], disposalType: ['SOLICITADA', Validators.required], requestedBy: ['', Validators.required] });
  readonly approveForm = this.fb.group({ id: [null, [Validators.required, Validators.min(1)]], approvedBy: ['', Validators.required], finalValue: [null, [Validators.required, Validators.min(0)]] });
>>>>>>> viejo/main

  ngOnInit(): void { this.loadPending(); }
  requestDisposal(): void {
    if (this.requestForm.invalid) return;
    const payload = this.requestForm.getRawValue();
<<<<<<< HEAD
    this.api.requestDisposal({ assetId: payload.assetId!, reason: payload.reason!, requestedBy: payload.requestedBy! }).subscribe({ next: () => this.loadPending(), error: (err) => (this.message = err?.error?.error ?? 'Error') });
  }

  approveDisposal(id: number): void {
    const row = this.approvals[id];
    if (!row?.approvedBy || row.finalValue === null || row.finalValue === undefined) {
      this.message = 'Debes capturar quién aprueba y el valor final.';
      return;
    }
    this.api.approveDisposal(id, { approvedBy: row.approvedBy, finalValue: row.finalValue }).subscribe({ next: () => this.loadPending(), error: (err) => (this.message = err?.error?.error ?? 'Error') });
  }

  rejectDisposal(id: number): void {
    const approvedBy = this.approvals[id]?.approvedBy;
    if (!approvedBy) {
      this.message = 'Indica quién rechaza la solicitud.';
      return;
    }
    this.api.rejectDisposal(id, { approvedBy }).subscribe({ next: () => this.loadPending(), error: (err) => (this.message = err?.error?.error ?? 'Error') });
  }

  loadPending(): void {
    this.api.listPendingDisposals().subscribe({
      next: (rows) => {
        this.pending = rows;
        this.approvals = {};
        rows.forEach((row) => (this.approvals[row.id] = { approvedBy: '', finalValue: null }));
      },
      error: (err) => (this.message = err?.error?.error ?? 'Error')
    });
  }
=======
    this.api.requestDisposal({
      assetId: payload.assetId!,
      reason: payload.reason!,
      disposalType: payload.disposalType!,
      requestedBy: payload.requestedBy!
    }).subscribe({ next: () => this.loadPending(), error: (err) => (this.message = err?.error?.error ?? 'Error') });
  }
  approveDisposal(): void {
    if (this.approveForm.invalid) return;
    const { id, approvedBy, finalValue } = this.approveForm.getRawValue();
    this.api.approveDisposal(id!, { approvedBy: approvedBy!, finalValue: finalValue! }).subscribe({ next: () => this.loadPending(), error: (err) => (this.message = err?.error?.error ?? 'Error') });
  }
  loadPending(): void { this.api.listPendingDisposals().subscribe({ next: (rows) => (this.pending = rows), error: (err) => (this.message = err?.error?.error ?? 'Error') }); }
>>>>>>> viejo/main
}
