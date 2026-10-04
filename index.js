const projects = [
  {
    title: "Classic Clean Energy",
    description: "A project that showcases my skills in web development and design. Here, I created a website for a fictional clean energy company, highlighting their services and commitment to sustainability.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "github.com/karumenick-dev/classic-clean-energy"
  },
  {
    title: "Fundi Bora Autoshop",
    description: "Here, I developed a website for a fictional auto repair shop, demonstrating my ability to create user-friendly interfaces and responsive designs.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "github.com/karumenick-dev/fundi-bora-autoshop"
  }
];

const testimonials = [
  {
    name: "John Doe",
    feedback: "Mitchelle is an exceptional web developer. Her attention to detail and creativity are unmatched. She delivered a fantastic website that exceeded our expectations.",
  },
  {
    name: "Jane Smith",
    feedback: "Working with Mitchelle was a pleasure. She understood our requirements perfectly and created a website that truly represents our brand.",
  }
];

function displayProjects() {
  const projectsContainer = document.getElementById("projects-container");
  projects.forEach(project => {
    const card = document.createElement("article");
    card.className = "card";
    const title = document.createElement("h3");
    title.textContent = project.title;
    const description = document.createElement("p");
    description.textContent = project.description;
    const tags = document.createElement("ul");
    tags.className = "tags";
    project.tags.forEach(tag => {
      const tagElement = document.createElement("li");
      tagElement.textContent = tag;
      tags.appendChild(tagElement);
    });
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(tags);
    projectsContainer.appendChild(card);

    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = "View Project";
    link.target = "_blank";
    card.appendChild(link);
  });
}

function displayTestimonials() {
    const testimonialsContainer = document.getElementById("testimonials-container");
    testimonials.forEach(testimonial => {
        const card = document.createElement("article");
        card.className = "card";
        const name = document.createElement("h4");
        name.textContent = testimonial.name;
        const feedback = document.createElement("p");
        feedback.textContent = testimonial.feedback;
        card.appendChild(name);
        card.appendChild(feedback);
        testimonialsContainer.appendChild(card);
    });
}

displayProjects();
displayTestimonials();