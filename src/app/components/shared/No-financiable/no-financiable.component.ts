import { ViabilizaVehiculoComponent } from './../../vistas/viabiliza-vehiculo/viabiliza-vehiculo.component';
import { FormularioViabilizacionComponent } from './../../formulario-viabilizacion/formulario-viabilizacion.component';
import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { constantes } from 'src/constants/constantes';
import { ApiMercadolibreService } from 'src/app/services/api-mercadolibre.service';

@Component({
  selector: 'app-no-financiable',
  templateUrl: './no-financiable.component.html',
  styleUrls: ['./no-financiable.component.scss']
})
export class NoFinanciableComponent implements OnInit {
  const = constantes;

  constructor(
    public apiMercadolibre: ApiMercadolibreService)
    {
  }

  ngOnInit() {
  }

}
