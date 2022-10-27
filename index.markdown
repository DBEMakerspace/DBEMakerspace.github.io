---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults


layout: default
title: Welcome
nav_order: 1
 
# Card Structure
card:
  - title: Book
    link: https://siso.curtin.edu.au/sodbe/
    image: /assets/images/bookmark.svg
    content: For booking equipment and booking an induction, click here.

  - title: Learn
    link: https://siso.curtin.edu.au/sodbe/
    image: /assets/images/idea.svg
    content: Tutorials and instructions how to use equipment, click here

  - title: Talk
    link: "#contact-us"
    image: /assets/images/speech-bubble.svg
    content: For questions and support from the technicians, <br> click here.

# Accordion Structure
accordion: 
  - title: Is this the library Makerspace?
    content: |
      No, this is the DBE Makerspace for those in the faculty of Design and Built Environment. 
    
      For information on the library Makerspace, please refer to the following website 
      <a href="https://makerspace.library.curtin.edu.au/">https://makerspace.library.curtin.edu.au/ </a>  
    
      If you are from another faculty you are also welcome to use the space subject to availability.

  - title: Can I use the DBE Makerspace?
    content: |
      The Makerspace is open to Design and Built Environment students, staff and tenants of building 418. If you are from another faculty you are also welcome to use the space subject to availability. 
      
      Due to the nature of our Makerspace’s environment and the extra safety precautions required, the space is not available to children.
    
      All students are welcome to drop in anytime during our opening hours or email us with your query.    

  - title: When is the DBE Makerspace open?
    content: |
      We are open Monday to Friday, 8.00am – 4.00pm all year round (excluding holidays).

      Depending on the day, staff maybe on campus longer and can support you.

  - title: Where are we situated?
    content: |
      DBE Makerspace is located in B418, level 1 at the back right corner of the building.

  - title: What equipment do you have?
    content: |
      You can view our equipment list here.


  - title: Will there be in-person support?
    content: |
       Our DBE Makerspace staff can provide information, help you to locate the equipment you need and assist you to get started. We promote self-directed learning and are not necessarily experts in all the activity areas we support.

  - title: What do I need to know to use the 3D Printers?
    content: |
      The DBE Makerspace has 21 Ultimaker 3D printers with 1 being larger than the others.

      <strong>Software:</strong> Cura

      <strong>File Type:</strong> STL

      <strong>Printing Material:</strong> PLA

      <strong>Build Volume Regular:</strong> 230 x 190 x 200 mm

      <strong>Build Volume Large:</strong> 330 x 240 x 300 mm
      
      Printing can be done overnight. An induction is required before use.

  - title: What do I need to know to use the laser cutters
    content: |
      The DBE Makerspace has 10 Emblaser 2

      <strong>Software:</strong> LightBurn

      <strong>File type:</strong> AI, PDF, SVG, DFX, PLT, PNG, JPG, GIF, BMP (preferred)

      <strong>Material:</strong> Cloth, cardboard, paper, leather, wood, and more

      <strong>Material Capacity:</strong> 500 x 300 x 50mm
    
      Laser cutting cannot be done overnight and require supervision by the user at all times. A technician is also required to be in line of sight at all times. An induction is required before use.
---
<!-- Latest compiled and minified CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> 

# DBE Makerspace

Welcome to B418 Makerspace, your one stop for all information about the 418:114 Makerspace and equipment within B418. Please click on one of the links below to be redirected to our most common questions or click on the options to your left for further options.
<br>
<br>

{% include cards.html %}

# Calendar
Want to know what's happening at the Makerspace? Find out below:


# FAQ
Find some of our most common questions for the DBE Makerspace here.

{% include accordion.html %}

# Contact Us
Want to know what's happening at the Makerspace? Find out below
{% include form.html %}
