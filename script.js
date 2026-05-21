// 1. Get references to form inputs
const inputName = document.getElementById('input-name');
const inputTitle = document.getElementById('input-title');
const inputEmail = document.getElementById('input-email');
const inputPhone = document.getElementById('input-phone');
const inputSummary = document.getElementById('input-summary');
const inputExperience = document.getElementById('input-experience');
const inputEducation = document.getElementById('input-education');

// 2. Get references to preview elements
const previewName = document.getElementById('preview-name');
const previewTitle = document.getElementById('preview-title');
const previewEmail = document.getElementById('preview-email');
const previewPhone = document.getElementById('preview-phone');
const previewSummary = document.getElementById('preview-summary');
const previewExperience = document.getElementById('preview-experience');
const previewEducation = document.getElementById('preview-education');

// 3. Function to update text live
function updatePreview(inputElement, previewElement, fallbackText) {
    inputElement.addEventListener('input', () => {
        if (inputElement.value.trim() === "") {
            previewElement.innerText = fallbackText;
        } else {
            previewElement.innerText = inputElement.value;
        }
    });
}

// Link each input field to its preview placeholder
updatePreview(inputName, previewName, "Your Name");
updatePreview(inputTitle, previewTitle, "Professional Title");
updatePreview(inputEmail, previewEmail, "email@example.com");
updatePreview(inputPhone, previewPhone, "Phone Number");
updatePreview(inputSummary, previewSummary, "Your summary will appear here...");
updatePreview(inputExperience, previewExperience, "Your work history will appear here...");
updatePreview(inputEducation, previewEducation, "Your educational background will appear here...");


// 4. Handle PDF generation and download
const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', () => {
    // Select the clean CV container box
    const cvElement = document.getElementById('cv-template');
    
    // Configure settings for the PDF engine
    const options = {
        margin:       0.5,
        filename:     'my-professional-cv.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 }, // Higher scale means better text sharpness
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Run the conversion library
    html2pdf().set(options).from(cvElement).save();
});