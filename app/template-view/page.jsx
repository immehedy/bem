import InvoicePreview from "./InvoicePreview";
import fetchData from "./useTemplateView/fetchData";

const TemplateView = async () => {
  const templateData = await fetchData();
  const htmlCode = templateData?.body?.code;
  return (
    <div>
      <InvoicePreview htmlCode={htmlCode} />
    </div>
  );
};

export default TemplateView;
