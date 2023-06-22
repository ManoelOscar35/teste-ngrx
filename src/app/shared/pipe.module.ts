import { NgModule } from '@angular/core';
import { ShortenerPipe } from './shortener.pipe';

@NgModule({
    declarations: [ShortenerPipe],
    imports: [],
    exports: [ShortenerPipe]
})

export class PipesModule{
}