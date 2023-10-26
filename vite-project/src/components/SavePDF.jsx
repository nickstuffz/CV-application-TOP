import { jsPDF } from "jspdf";

function SavePDF() {
  const saveFile = () => {
    const doc = new jsPDF("portrait", "px", "a4");
    const report = document.querySelector("#document");
    doc.html(report, {
      callback: function (doc) {
        doc.save("resume.pdf");
      },
    });
  };

  return (
    <div id="savepdf">
      <button onClick={saveFile} className="h-10 w-20 border-2 border-blue-600">
        Save
      </button>
    </div>
  );
}

export default SavePDF;
