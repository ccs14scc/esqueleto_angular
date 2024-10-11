import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';

export const routes: Routes = [
    {
        path: "inicio",
        component: InicioComponent
    },
    {
        path: "contacto",
        component: ContactoComponent
    },
    {
        path: "registrate",
        component: RegistrateComponent
    },
];
