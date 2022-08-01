import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})
export class BlogGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  blogGrid=[
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/news/news-1.jpg',
      title:'Including animation in your design system',
      image1:'http://azim.commonsupport.com/Docpro/assets/images/news/admin-1.png',
      name:'Eva Green',
      date:'April 23, 2020',
      description:'Lorem ipsum dolor sit amet consectetur adipisic do eiusmod tempor incididunt labore doloremagna aliqua enim minim veniam. quis nostrud exercitation.',      
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/news/news-2.jpg',
      title:'Baking can be done with a few things.',
      image1:'http://azim.commonsupport.com/Docpro/assets/images/news/admin-2.png',
      name:'George Clooney',
      date:'April 23, 2020',
      description:'Lorem ipsum dolor sit amet consectetur adipisic do eiusmod tempor incididunt labore doloremagna aliqua enim minim veniam. quis nostrud exercitation.',      
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/news/news-3.jpg',
      title:'The smell of good bread baking.',
      image1:'http://azim.commonsupport.com/Docpro/assets/images/news/admin-3.png',
      name:'Eva Green',
      date:'April 23, 2020',
      description:'Lorem ipsum dolor sit amet consectetur adipisic do eiusmod tempor incididunt labore doloremagna aliqua enim minim veniam. quis nostrud exercitation.',      
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/news/news-4.jpg',
      title:'Great food is not just eating energy.',
      image1:'http://azim.commonsupport.com/Docpro/assets/images/news/admin-4.png',
      name:'George Clooney',
      date:'April 23, 2020',
      description:'Lorem ipsum dolor sit amet consectetur adipisic do eiusmod tempor incididunt labore doloremagna aliqua enim minim veniam. quis nostrud exercitation.',      
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/news/news-5.jpg',
      title:'Including animation in your design system',
      image1:'http://azim.commonsupport.com/Docpro/assets/images/news/admin-5.png',
      name:'Eva Green',
      date:'April 23, 2020',
      description:'Lorem ipsum dolor sit amet consectetur adipisic do eiusmod tempor incididunt labore doloremagna aliqua enim minim veniam. quis nostrud exercitation.',     
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/news/news-6.jpg',
      title:'The smell of good bread baking.',
      image1:'http://azim.commonsupport.com/Docpro/assets/images/news/admin-6.png',
      name:'George Clooney',
      date:'April 23, 2020',
      description:'Lorem ipsum dolor sit amet consectetur adipisic do eiusmod tempor incididunt labore doloremagna aliqua enim minim veniam. quis nostrud exercitation.',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/news/news-7.jpg',
      title:'Including animation in your design system',
      image1:'http://azim.commonsupport.com/Docpro/assets/images/news/admin-7.png',
      name:'Eva Green',
      date:'April 23, 2020',
      description:'Lorem ipsum dolor sit amet consectetur adipisic do eiusmod tempor incididunt labore doloremagna aliqua enim minim veniam. quis nostrud exercitation.',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/news/news-8.jpg',
      title:'Baking can be done with a few things.',
      image1:'http://azim.commonsupport.com/Docpro/assets/images/news/admin-8.png',
      name:'George Clooney',
      date:'April 23, 2020',
      description:'Lorem ipsum dolor sit amet consectetur adipisic do eiusmod tempor incididunt labore doloremagna aliqua enim minim veniam. quis nostrud exercitation.',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/news/news-9.jpg',
      title:'The smell of good bread baking.',
      image1:'http://azim.commonsupport.com/Docpro/assets/images/news/admin-9.png',
      name:'Eva Green',
      date:'April 23, 2020',
      description:'Lorem ipsum dolor sit amet consectetur adipisic do eiusmod tempor incididunt labore doloremagna aliqua enim minim veniam. quis nostrud exercitation.',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/news/news-10.jpg',
      title:'Including animation in your design system',
      image1:'http://azim.commonsupport.com/Docpro/assets/images/news/admin-10.png',
      name:'Eva Green',
      date:'April 23, 2020',
      description:'Lorem ipsum dolor sit amet consectetur adipisic do eiusmod tempor incididunt labore doloremagna aliqua enim minim veniam. quis nostrud exercitation.',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/news/news-11.jpg',
      title:'Baking can be done with a few things.',
      image1:'http://azim.commonsupport.com/Docpro/assets/images/news/admin-11.png',
      name:'George Clooney',
      date:'April 23, 2020',
      description:'Lorem ipsum dolor sit amet consectetur adipisic do eiusmod tempor incididunt labore doloremagna aliqua enim minim veniam. quis nostrud exercitation.',
    },
    {
      image:'http://azim.commonsupport.com/Docpro/assets/images/news/news-12.jpg',
      title:'The smell of good bread baking.',
      image1:'http://azim.commonsupport.com/Docpro/assets/images/news/admin-12.png',
      name:'Eva Green',
      date:'April 23, 2020',
      description:'Lorem ipsum dolor sit amet consectetur adipisic do eiusmod tempor incididunt labore doloremagna aliqua enim minim veniam. quis nostrud exercitation.',
    },
  ]
}
