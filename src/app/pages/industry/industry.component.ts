import { Component } from '@angular/core';
import { FooterComponent } from '../../units/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../units/card/card.component';

@Component({
  selector: 'app-industry',
  standalone: true,
  imports: [FooterComponent,RouterLink],
  templateUrl: './industry.component.html',
  styleUrl: './industry.component.css'
})
export class IndustryComponent {
  industry=[
    {
      id:1,
      title:"Aerospace & Defence",
      image:"../../../assets/c2&aero.jpg",
      description:"NeST Digital partners with prime Global Aerospace OEMs bringing unmatched value to its customers and contributing to evolving modernization of aviation technologies."    
    },
    {
      id:2,
      title:"Banking & Financial Service (BFS)",
      image:"../../../assets/ban.jpg",
      description:"The Banking and Financial Services (BFS) Group at NeST Digital has established itself with over two decades of experience as a pioneer and leader in the GCC market by providing payment platform solutions"    
    },
    {
      id:3,
      title:"Healthcare",
      image:"../../../assets/hc.jpg",
      description:"Healthcare software development is vital for modern healthcare systems. With advancing technology, providers rely on software solutions to streamline operations, improve patient care, and boost outcomes."    
    },
    {
      id:4,
      title:"Insurance",
      image:"../../../assets/insu.jpg",
      description:"Leveraging our rich technical & domain expertise and competitive cost advantages, NeST works with Insurance solution platform providers and technology companies."    
    },
    {
      id:5,
      title:"Locomotive",
      image:"../../../assets/loco.jpg",
      description:"At NeST Digital, we are committed to delivering high-quality solutions that drive innovation in the locomotive sector."    
    },
    {
      id:6,
      title:"Industrial",
      image:"../../../assets/indus.png",
      description:"Our three decades of presence in the Manufacturing & Energy segment and the acquired domain knowledge form the foundation of our offerings to our world-leading customers."    
    },
    {
      id:7,
      title:"Mobility",
      image:"../../../assets/mob.jpg",
      description:"Providing better solutions for overcoming the challenges of the technology curve, competition and increasing customer expectations."    
    }
  ]
  }
  
