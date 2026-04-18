import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { AdminUser, Asset, Assignment, BudgetLine, Department, Disposal, Employee, InvestedSummary, PurchaseInvoice, Supplier } from '../models/api.models';
=======
import { AdminUser, Asset, Assignment, Disposal, InvestedSummary, PurchaseInvoice } from '../models/api.models';
>>>>>>> viejo/main

@Injectable({ providedIn: 'root' })
export class AssetsApiService {
  private readonly base = '/api';

  constructor(private readonly http: HttpClient) {}

  createInvoice(payload: {
    invoiceNumber: string;
    invoiceDate: string;
    totalAmount: number;
    supplierId: number;
    budgetLineId: number;
    notes?: string;
  }): Observable<PurchaseInvoice> {
    return this.http.post<PurchaseInvoice>(`${this.base}/acquisitions/invoices`, payload);
  }

<<<<<<< HEAD
  createSupplier(payload: { name: string; taxId: string; email: string; phone?: string }): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.base}/acquisitions/suppliers`, payload);
  }

  listSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.base}/acquisitions/suppliers`);
  }

  createBudgetLine(payload: { code: string; description: string; allocatedAmount: number }): Observable<BudgetLine> {
    return this.http.post<BudgetLine>(`${this.base}/acquisitions/budget-lines`, payload);
  }

  listBudgetLines(): Observable<BudgetLine[]> {
    return this.http.get<BudgetLine[]>(`${this.base}/acquisitions/budget-lines`);
  }

=======
>>>>>>> viejo/main
  createAsset(payload: {
    assetCode?: string;
    name: string;
    description?: string;
    serialNumber: string;
    acquisitionDate: string;
    acquisitionCost: number;
    tagType: 'QR' | 'RFID';
    tagValue: string;
<<<<<<< HEAD
    location?: string;
=======
    location: string;
>>>>>>> viejo/main
    purchaseInvoiceId: number;
  }): Observable<Asset> {
    return this.http.post<Asset>(`${this.base}/inventory/assets`, payload);
  }

  listAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(`${this.base}/inventory/assets`);
  }

<<<<<<< HEAD
  inventoryAssetQr(assetId: number): string {
    return `${this.base}/inventory/assets/${assetId}/qr.png`;
  }

  employeeAssetQr(assetId: number): string {
    return `${this.base}/employee/me/assets/${assetId}/qr.png`;
  }

=======
>>>>>>> viejo/main
  createAssignment(payload: {
    assetId: number;
    employeeId: number;
    assignedAt: string;
    expectedReturnAt?: string;
<<<<<<< HEAD
=======
    digitalSignature: string;
    receiptConfirmation: string;
>>>>>>> viejo/main
  }): Observable<Assignment> {
    return this.http.post<Assignment>(`${this.base}/assignments`, payload);
  }

  returnAssignment(assignmentId: number): Observable<Assignment> {
    return this.http.post<Assignment>(`${this.base}/assignments/${assignmentId}/return`, {});
  }

  listAssignmentsByEmployee(employeeId: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.base}/assignments/employee/${employeeId}`);
  }

  listReturnedAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.base}/assignments/returns`);
  }

<<<<<<< HEAD
  myAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.base}/employee/me/assignments`);
  }

  myPendingAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.base}/employee/me/pending-assignments`);
  }

  confirmAssignment(assignmentId: number): Observable<Assignment> {
    return this.http.post<Assignment>(`${this.base}/employee/me/assignments/${assignmentId}/confirm`, { acceptedTerms: true });
  }

  requestDisposal(payload: {
    assetId: number;
    reason: string;
    requestedBy: string;
  }): Observable<Disposal> {
    return this.http.post<Disposal>(`${this.base}/disposals`, { ...payload, disposalType: 'BAJA' });
  }

  requestDisposalByEmployee(payload: { assetId: number; reason: string }): Observable<Disposal> {
    return this.http.post<Disposal>(`${this.base}/employee/me/disposals`, payload);
=======
  requestDisposal(payload: {
    assetId: number;
    reason: string;
    disposalType: string;
    requestedBy: string;
  }): Observable<Disposal> {
    return this.http.post<Disposal>(`${this.base}/disposals`, payload);
>>>>>>> viejo/main
  }

  approveDisposal(disposalId: number, payload: { approvedBy: string; finalValue: number }): Observable<Disposal> {
    return this.http.post<Disposal>(`${this.base}/disposals/${disposalId}/approve`, payload);
  }

<<<<<<< HEAD
  rejectDisposal(disposalId: number, payload: { approvedBy: string }): Observable<Disposal> {
    return this.http.post<Disposal>(`${this.base}/disposals/${disposalId}/reject`, payload);
  }

=======
>>>>>>> viejo/main
  listPendingDisposals(): Observable<Disposal[]> {
    return this.http.get<Disposal[]>(`${this.base}/disposals/pending`);
  }


<<<<<<< HEAD
  listDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.base}/data/departments`);
  }

  createEmployeeData(payload: { fullName: string; email: string; departmentId: number }): Observable<Employee> {
    return this.http.post<Employee>(`${this.base}/data/employees`, payload);
  }

  listEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.base}/data/employees`);
  }

=======
>>>>>>> viejo/main
  createUser(payload: { username: string; password: string; role: 'ADMINISTRADOR' | 'COMPRAS' | 'INVENTARIO' | 'EMPLEADO' | 'FINANZAS'; employeeId?: number }): Observable<AdminUser> {
    return this.http.post<AdminUser>(`${this.base}/admin/users`, payload);
  }

<<<<<<< HEAD
=======
  myAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.base}/employee/me/assignments`);
  }

>>>>>>> viejo/main
  investedSummary(): Observable<InvestedSummary> {
    return this.http.get<InvestedSummary>(`${this.base}/reports/invested-assets/summary`);
  }

  employeeReport(employeeId: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.base}/reports/employee/${employeeId}`);
  }

  upcomingDisposals(): Observable<Asset[]> {
    return this.http.get<Asset[]>(`${this.base}/reports/upcoming-disposals`);
  }

  exportInvested(format: 'excel' | 'pdf'): Observable<Blob> {
    const params = new HttpParams().set('format', format);
    return this.http.get(`${this.base}/reports/invested-assets/export`, {
      params,
      responseType: 'blob'
    });
  }
<<<<<<< HEAD

  exportMyAssetsPdf(): Observable<Blob> {
    return this.http.get(`${this.base}/reports/employee/me/export`, { responseType: 'blob' });
  }
=======
>>>>>>> viejo/main
}
