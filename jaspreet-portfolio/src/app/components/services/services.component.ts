import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Layers, Monitor, ServerCog, PlugZap } from 'lucide-angular';
import { SERVICES } from '../../data/services.data';

const ICON_MAP: Record<string, any> = {
  layers: Layers,
  monitor: Monitor,
  'server-cog': ServerCog,
  'plug-zap': PlugZap,
};

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  readonly services = SERVICES;

  iconFor(key: string) {
    return ICON_MAP[key];
  }
}
