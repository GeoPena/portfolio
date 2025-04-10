import "./uses.css";
export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

const UseCard = ({ title, description }) => {
  return (
    <div className="uses-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const UsesSection = ({ items }) => {
  return (
    <section className="uses-section">
      <div className="uses-section__content">
        {items.map((group, index) => (
          <div className="uses-section__group" key={index}>
            <h2>{group.groupName}</h2>
            <div className="uses-section__group-content">
              {group.items.map((item, idx) => (
                <UseCard key={idx} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const items = [
  {
    groupName: "Workstation",
    items: [
      {
        title: "Item Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      },
      {
        title: "Item Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      },
    ],
  },
  {
    groupName: "Development tools",
    items: [
      {
        title: "tem Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      },
      {
        title: "tem Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      },
    ],
  },

  {
    groupName: "Design",
    items: [
      {
        title: "Whimsical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      },
      {
        title: "Figma",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      },
    ],
  },
  {
    groupName: "Productivity",
    items: [
      {
        title: "Item name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      },
      {
        title: "Item name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
      },
    ],
  },
];

export default function Uses() {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center px-6 md:px-0 mx-auto mb-16">
        <h1 className="uses-header text-4xl font-bold mb-4">
          Software I use, gadgets I love, <br />
          and other things I recommend.
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
          adipisicing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi Lorem
          ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi..
        </p>
      </div>

      <UsesSection items={items} />
    </>
  );
}
