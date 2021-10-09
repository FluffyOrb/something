import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    // primeng
    SkeletonModule,
  ]
})
export class FaqModule { }
