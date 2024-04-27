import fetchData from "./useTemplateView/fetchData";

const TemplateView = async () => {
  const templateData = await fetchData();
  console.log({ templateData });
  return <div>TemplateView</div>;
};

export default TemplateView;
