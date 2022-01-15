import { Project } from "fixturify-project";

const project = new Project({
  files: {
    "my-template.hbs": "<div>Hello world</div>",
  },
});

test("do I understand how to create a project", () => {
  expect(project.name).toBe("a-fixturified-project");
});
