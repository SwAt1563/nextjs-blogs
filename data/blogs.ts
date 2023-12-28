enum Status {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

type BlogSeed = {
  title: string;
  description: string;
  imageUrl: string;
  status: Status;
  userId: number;
  categoryId: number;
};

export const blogs: BlogSeed[] = [
  {
    title: "Introduction to Prisma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas, nisi sit amet varius viverra, diam magna laoreet dolor, nec sollicitudin purus elit vel nunc. Nullam volutpat arcu quis felis vehicula laoreet. Donec faucibus scelerisque justo non mattis. Nullam odio elit, sagittis vel turpis ac, volutpat lobortis nisl. Aliquam nec magna lectus. Nunc tincidunt pulvinar metus id pretium. Sed lacinia ut ex nec imperdiet. Phasellus pellentesque velit ut quam fringilla pretium.",
    imageUrl: "https://picsum.photos/id/1/400/400",
    status: Status.PUBLISHED,
    userId: 2,
    categoryId: 1,
  },
  {
    title: "Exploring GraphQL",
    description:
      "Cras semper commodo nulla, quis luctus dolor malesuada at. Fusce blandit libero sit amet quam maximus accumsan ac sed lorem. Praesent vitae fermentum dui, nec luctus sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus condimentum non felis eu accumsan. Mauris fermentum bibendum massa, in laoreet augue sagittis et. Cras sagittis est in lorem malesuada vulputate.",
    imageUrl: "https://picsum.photos/id/2/400/400",
    status: Status.DRAFT,
    userId: 3,
    categoryId: 2,
  },
  {
    title: "Building RESTful APIs with Express",
    description:
      "Nunc dignissim arcu ligula, eu gravida lacus varius eget. Vivamus sem quam, accumsan eget ornare quis, tristique vel tellus. Ut quis scelerisque nibh. Curabitur dignissim quis nunc malesuada facilisis. Ut euismod turpis a ligula posuere, non facilisis tellus feugiat. Phasellus dapibus leo quis augue fermentum molestie. Nullam nec sapien orci. Suspendisse imperdiet neque at ullamcorper condimentum.",
    imageUrl: "https://picsum.photos/id/3/400/400",
    status: Status.PUBLISHED,
    userId: 2,
    categoryId: 1,
  },
  {
    title: "Mastering React Hooks",
    description:
      "Aenean in risus ut tortor viverra aliquam. Vestibulum bibendum quam tellus, id placerat sapien lobortis et. Praesent vel ullamcorper neque. Aenean luctus elit diam, interdum blandit sapien cursus a. Mauris sit amet aliquet metus. Nullam dui metus, accumsan a mattis id, vehicula ac dolor. Donec eget lacus in sapien convallis ultrices ut ac risus. Suspendisse gravida ipsum accumsan tincidunt cursus. Curabitur vitae tellus et nisi iaculis aliquet id vitae turpis. Proin eu ultrices sapien. Phasellus volutpat eget turpis sed tempus.",
    imageUrl: "https://picsum.photos/id/4/400/400",
    status: Status.PUBLISHED,
    userId: 2,
    categoryId: 3,
  },
  {
    title: "Node.js Best Practices",
    description:
      "Sed commodo, ex quis aliquam volutpat, elit dolor scelerisque neque, in egestas ex dui ut nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque quis posuere nisi. Curabitur sit amet diam non velit faucibus gravida sed vitae elit. Mauris vitae ultricies arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc dui massa, pulvinar ornare pretium eu, faucibus vitae nisi. Fusce ut risus semper, feugiat odio quis, bibendum mi. Sed ultricies nulla augue, vel tempor arcu gravida nec. Nunc semper, dolor non bibendum consectetur, nulla ante efficitur lacus, non ullamcorper mauris nunc at nunc. Phasellus ac arcu sit amet felis molestie finibus.",
    imageUrl: "https://picsum.photos/id/5/400/400",
    status: Status.DRAFT,
    userId: 2,
    categoryId: 1,
  },
  {
    title: "Getting Started with Docker",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageUrl: "https://picsum.photos/id/6/400/400",
    status: Status.PUBLISHED,
    userId: 3,
    categoryId: 3,
  },
];
