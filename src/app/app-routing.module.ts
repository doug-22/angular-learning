import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DirectivesComponent } from "./components/directives/directives.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'compartilhamento-de-dados', component: ParentDataComponent},
  {path: 'diretivas', component: DirectivesComponent},
  {path: 'redenrizacao-condicional', component: IfRenderComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'emitindo-eventos', component: EmitterComponent},
  {path: 'lista', component: ListRenderComponent},
  {path: 'pipe', component: PipesComponent},
  {path: 'two-way', component: TwoWayBindingComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
