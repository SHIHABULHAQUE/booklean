import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroSliderComponent } from '../../components/hero-slider/hero-slider';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { IndustriesComponent } from '../../components/industries/industries.component';
import { GlobalPresenceComponent } from '../../components/global-presence/global-presence.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { ChatAssistantComponent } from '../../components/chat/chat-assistant.component';
import { PlatformComponent } from '../../components/platform/platform.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeroSliderComponent, HeroComponent, AboutComponent, ServicesComponent, IndustriesComponent, GlobalPresenceComponent, CtaComponent, FooterComponent, ChatAssistantComponent, PlatformComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent { }
