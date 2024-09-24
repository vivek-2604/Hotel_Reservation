export const blogs = [
  {
    slug: "first-post",
    category:"restaurant",
    releaseDate: "Feb 23, 2024",
    title: "Lorem dolore sint ex. Magna officia aliqua adipisicing eu. Eiusmod voluptate eiusmod sit eu",
    subTitle: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.",
    contentTitle:"Elegant Dessert: 10 Tips How to Make It at Home",
    content: "Sint ex esse est non adipisicing exercitation consequat ad irure. Reprehenderit id nostrud veniam ad ullamco proident aute duis adipisicing. Sunt cupidatat do proident occaecat proident aliquip sint. Dolore proident enim esse enim excepteur.",
  },
  {
    slug: "second-post",
    category:"restaurant",
    releaseDate: "Feb 23, 2024",
    title: "Cillum et eu culpa. Eiusmod dolor amet. Amet amet laboris. Veniam non Lorem. Ad veniam velit.",
    subTitle: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.",
    contentTitle:"Elegant Dessert: 10 Tips How to Make It at Home",
    content: "Veniam excepteur veniam nulla commodo adipisicing labore sit laborum. Ut Lorem velit fugiat ut eu velit quis sunt. Ex fugiat enim culpa sunt amet aliquip cillum commodo.",
  },
  {
    slug: "third-post",
    category:"restaurant",
    releaseDate: "Feb 23, 2024",
    title: "Culpa irure ipsum id. Dolor excepteur aliqua. Ut culpa ex et. Laboris aliquip voluptate qui. Labore aute minim do aliqua.",
    subTitle: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.",
    contentTitle:"Elegant Dessert: 10 Tips How to Make It at Home",
    content: "Minim ad sunt aliqua nulla voluptate labore commodo ullamco tempor. Cillum ea ea in eiusmod exercitation. Magna esse do sunt enim cillum ea eu. Officia laborum do enim minim laboris anim est. Ut laboris laborum dolore non aute nostrud Lorem.",
  },
  {
    slug: "forth-post",
    category:"restaurant",
    releaseDate: "Feb 23, 2024",
    title: "Eiusmod et reprehenderit. Reprehenderit nisi ullamco. Eiusmod cupidatat reprehenderit dolor cillum.",
    subTitle: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.",
    contentTitle:"Elegant Dessert: 10 Tips How to Make It at Home",
    content: "Sint ex esse est non adipisicing exercitation consequat ad irure. Reprehenderit id nostrud veniam ad ullamco proident aute duis adipisicing. Sunt cupidatat do proident occaecat proident aliquip sint. Dolore proident enim esse enim excepteur.",
  },
  {
    slug: "fifth-post",
    category:"restaurant",
    releaseDate: "Feb 23, 2024",
    title: "Dolor mollit aliquip nisi culpa. Cupidatat consectetur dolor culpa. Est eu veniam proident qui. Aute excepteur non.",
    subTitle: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.",
    contentTitle:"Elegant Dessert: 10 Tips How to Make It at Home",
    content: "In dolore aute culpa Lorem veniam adipisicing. Occaecat dolore tempor laborum in sunt sunt. Nisi deserunt aute esse culpa fugiat. Aliqua sit quis non quis mollit incididunt aliqua ad velit. Fugiat ipsum cillum nostrud labore.",
  },
  
];


export const getBlogs = async() => {
  return blogs;
}

export const getBlog = async(slug)=>{ 
  const blog = blogs.find((i)=> i.slug === slug)
  return blog;
}