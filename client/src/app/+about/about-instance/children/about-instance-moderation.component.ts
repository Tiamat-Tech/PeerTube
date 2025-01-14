import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ServerService } from '@app/core'
import { AboutHTML } from '@app/shared/shared-main/instance/instance.service'
import { ResolverData } from '../about-instance.resolver'
import { PluginSelectorDirective } from '@app/shared/shared-main/plugins/plugin-selector.directive'

@Component({
  templateUrl: './about-instance-moderation.component.html',
  styleUrls: [ './about-instance-common.component.scss' ],
  standalone: true,
  imports: [ CommonModule, PluginSelectorDirective ]
})
export class AboutInstanceModerationComponent implements OnInit {
  aboutHTML: AboutHTML

  constructor (
    private route: ActivatedRoute,
    private serverService: ServerService
  ) {}

  get instanceName () {
    return this.serverService.getHTMLConfig().instance.name
  }

  ngOnInit () {
    const { aboutHTML }: ResolverData = this.route.parent.snapshot.data.instanceData

    this.aboutHTML = aboutHTML
  }
}