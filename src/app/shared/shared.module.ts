import { NgModule } from '@angular/core';

import { SharedComponent }   from './shared.component';
import { TextSlicePipe } from './common/length.pipe';

@NgModule({
    imports: [],
    exports: [TextSlicePipe],
    declarations: [SharedComponent, TextSlicePipe],
    providers: [],
})
export class SharedModule { }
