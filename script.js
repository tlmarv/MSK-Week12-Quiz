// Quiz questions and answers
const quizData = [
   {
       question: "A 27-year-old woman comes to the office for counseling prior to conception. She states that a friend recently delivered a newborn with a neural tube defect and she wants to decrease her risk for having a child with this condition. She has no history of major medical illness and takes no medications. Physical examination shows no abnormalities. It is most appropriate to recommend that this patient begin supplementation with a vitamin that is a cofactor in which of the following processes?",
        choices: [
            "Biosynthesis of nucleotides",
            "Protein gamma glutamate carboxylation",
            "Scavenging of free radicals",
            "Transketolation",
            "Triglyceride lipolysis"
        ],
        correctAnswer: 0, // The correct answer index (in this case, "Biosynthesis of nucleotides")
        explanation: "Folate supplementation is recommended to reduce the risk of neural tube defects, as folate is a cofactor in nucleotide biosynthesis."
    },
{
    question: "A 50-year-old woman presents with poorly controlled diabetes despite multiple visits to healthcare providers and adherence to prescribed medications. Upon reviewing her case, you learn she lives in a low-income neighborhood with limited access to fresh foods and a safe environment for exercise. Which of the following best explains how her social context is affecting her health outcomes?",
    choices: [
        "She is not receiving appropriate pharmacological treatment for diabetes.",
        "Social determinants of health are negatively influencing her ability to manage her diabetes.",
        "Her adherence to medications is the primary factor in her health outcomes.",
        "Lack of proper genetic testing is delaying adequate treatment."
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Social determinants of health are negatively influencing her ability to manage her diabetes.")
    explanation: "Social determinants of health, such as access to healthy food and physical activity, are negatively influencing her ability to manage her diabetes, despite adherence to medication."
},
{
    question: "A local health department is tasked with improving the health of its population. It creates a program to offer free blood pressure screenings and provide low-cost medications for hypertension. According to the health policy framework, which part of the framework is this department fulfilling?",
    choices: [
        "Creating an explicit health policy.",
        "Building consensus among healthcare providers.",
        "Establishing community health strategies to complement individual health services.",
        "Ignoring population health strategies in favor of individual care."
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Establishing community health strategies to complement individual health services.")
    explanation: "The department is establishing community health strategies to complement individual care by offering screenings and medications, a key element in improving population health."
},
{
    question: "A hospital is reviewing its strategies to improve quality of care for patients while also reducing healthcare costs. Which element of Health Systems Science is most relevant to achieving these goals?",
    choices: [
        "Implementing new clinical guidelines for surgery.",
        "Focusing on quality improvement efforts, such as reducing medical errors and improving patient safety.",
        "Expanding the hospital's inpatient capacity.",
        "Encouraging more patients to use emergency services."
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Focusing on quality improvement efforts, such as reducing medical errors and improving patient safety.")
    explanation: "Focusing on quality improvement efforts, including reducing medical errors and enhancing patient safety, directly aligns with the goals of improving care quality while lowering healthcare costs."
},
{
    question: "A medical student is learning about the quadruple aim in healthcare. She correctly identifies that improving patient outcomes and healthcare provider experiences are two important goals. What are the remaining two components of the quadruple aim?",
    choices: [
        "Reducing hospital readmissions and increasing patient compliance.",
        "Improving quality and safety and reducing the cost of care.",
        "Enhancing community health and promoting population health policies.",
        "Expanding healthcare facilities and improving financial reimbursement models."
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Improving quality and safety and reducing the cost of care.")
    explanation: "The quadruple aim in healthcare focuses on improving patient outcomes, enhancing provider experiences, improving quality and safety, and reducing the cost of care."
},
{
    question: "Which anatomical plane divides the body into anterior and posterior sections?",
    choices: [
        "Sagittal plane",
        "Median plane",
        "Frontal (coronal) plane",
        "Transverse plane"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Frontal (coronal) plane.")
    explanation: "The frontal (coronal) plane divides the body into anterior (front) and posterior (back) sections, while the sagittal and median planes divide the body into left and right sections, and the transverse plane divides it into upper and lower sections."
},
{
    question: "What type of joint is characterized by the presence of a joint capsule and synovial fluid?",
    choices: [
        "Fibrous joint",
        "Cartilaginous joint",
        "Synovial joint",
        "Pivot joint"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Synovial joint.")
    explanation: "A synovial joint is characterized by the presence of a joint capsule and synovial fluid, which facilitate smooth movement between the articulating bones. Fibrous and cartilaginous joints do not have a joint capsule or synovial fluid."
},
{
    question: "What type of contraction occurs when a muscle produces force but does not change in length?",
    choices: [
        "Eccentric contraction",
        "Concentric contraction",
        "Isometric contraction",
        "Isotonic contraction"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Isometric contraction.")
    explanation: "In isometric contraction, the muscle produces force but does not change in length, meaning the muscle is activated but there is no movement. Eccentric and concentric contractions involve muscle length changes, and isotonic contraction includes movement."
},
{
    question: "Which type of bone is found in the wrist and ankle?",
    choices: [
        "Long bones",
        "Flat bones",
        "Short bones",
        "Irregular bones"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Short bones.")
    explanation: "Short bones are cuboidal in shape and are found in the wrist (carpals) and ankle (tarsals). They provide support and stability with little to no movement."
},
{
    question: "A patient presents with difficulty extending their arm at the elbow. Which type of synovial joint is involved in this movement?",
    choices: [
        "Saddle joint",
        "Pivot joint",
        "Hinge joint",
        "Ball and socket joint"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Hinge joint.")
    explanation: "Hinge joints permit flexion and extension only, with movements occurring in one plane around a single axis. The elbow is an example of a hinge joint."
},
{
    question: "A 28-year-old baseball pitcher has been diagnosed with retroversion in the dominant arm's humerus. Which law explains the structural adaptation in response to repeated throwing motions?",
    choices: [
        "Hooke's Law",
        "Newton's Law",
        "Wolff’s Law",
        "Pascal's Law"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Wolff’s Law.")
    explanation: "Wolff’s Law, developed by Julius Wolff in 1868, states that bone adapts to the demands placed on it. The bone structure remodels in response to the functional demands, such as those seen in the repetitive throwing motions of a baseball pitcher."
},
{
    question: "A 15-year-old girl presents with an idiopathic lateral curvature of the spine. What condition does she likely have, and what part of the skeletal system is primarily affected?",
    choices: [
        "Scoliosis; axial skeleton",
        "Kyphosis; appendicular skeleton",
        "Lordosis; axial skeleton",
        "Scoliosis; appendicular skeleton"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Scoliosis; axial skeleton.")
    explanation: "Scoliosis is characterized by an increased lateral curvature of the spine with vertebral rotation, affecting the axial skeleton, which includes the bones of the head, neck, and trunk."
},
{
    question: "During shoulder abduction, which muscle acts as the primary agonist, and which other muscle stabilizes the scapula to allow for smooth movement?",
    choices: [
        "Deltoid; trapezius",
        "Pectoralis major; rhomboid major",
        "Trapezius; latissimus dorsi",
        "Biceps brachii; supraspinatus"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Deltoid; trapezius.")
    explanation: "The deltoid muscle is the primary agonist during shoulder abduction, while the trapezius muscle stabilizes the scapula to allow for smooth and coordinated movement."
},
{
    question: "A 35-year-old patient is recovering from a stroke and reports difficulty with moving their foot in a way that typically lifts the front of the foot. Which movement is impaired, and in which direction does this movement occur?",
    choices: [
        "Plantarflexion; pointing the toes downward",
        "Dorsiflexion; raising the foot towards the leg",
        "Adduction; moving the foot towards the midline",
        "Pronation; rotating the foot inward"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Dorsiflexion; raising the foot towards the leg.")
    explanation: "Dorsiflexion refers to the movement where the toes are brought upward towards the knee, reducing the angle between the foot and the leg. This movement is primarily controlled by the tibialis anterior. Difficulty with dorsiflexion is common in stroke patients due to muscle weakness."
},
{
    question: "Which structure does the vertebral artery pass through in the cervical vertebrae?",
    choices: [
        "Vertebral foramen",
        "Transverse foramen",
        "Intervertebral foramen",
        "Vertebral canal"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Transverse foramen.")
    explanation: "The vertebral artery passes through the transverse foramen of the cervical vertebrae. This foramen is specific to the cervical region and allows safe passage of the vertebral artery towards the brain."
},
{
    question: "What ligament connects the laminae of adjacent vertebrae?",
    choices: [
        "Anterior longitudinal ligament",
        "Posterior longitudinal ligament",
        "Ligamentum flavum",
        "Supraspinous ligament"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Ligamentum flavum.")
    explanation: "The ligamentum flavum connects the laminae of adjacent vertebrae, providing elasticity and allowing for flexion and extension movements of the vertebral column."
},
{
    question: "Which part of the intervertebral disc herniates in a disc herniation?",
    choices: [
        "Annulus fibrosus",
        "Nucleus pulposus",
        "Vertebral endplate",
        "Pedicle"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Nucleus pulposus.")
    explanation: "In a disc herniation, the nucleus pulposus, the soft, gel-like center of the intervertebral disc, protrudes through the annulus fibrosus, potentially compressing nearby nerves and causing pain."
},
{
    question: "Which nerve innervates the intrinsic muscles of the back?",
    choices: [
        "Ventral rami",
        "Dorsal rami",
        "Phrenic nerve",
        "Cervical plexus"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Dorsal rami.")
    explanation: "The dorsal rami of spinal nerves innervate the intrinsic muscles of the back, which are responsible for maintaining posture and facilitating movements of the vertebral column."
},
{
    question: "Which spinal ligament prevents hyperextension of the vertebral column?",
    choices: [
        "Anterior longitudinal ligament",
        "Ligamentum nuchae",
        "Posterior longitudinal ligament",
        "Interspinous ligament"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Anterior longitudinal ligament.")
    explanation: "The anterior longitudinal ligament runs along the front of the vertebral bodies and prevents hyperextension of the vertebral column by limiting excessive backward bending."
},
{
    question: "A 45-year-old man presents with severe lower back pain radiating down his left leg. Physical exam reveals loss of sensation in the lateral aspect of his foot and difficulty with plantar flexion. Which spinal nerve root is most likely compressed?",
    choices: [
        "L2",
        "L3",
        "L4",
        "S1"
    ],
    correctAnswer: 3, // The correct answer index (in this case, "S1.")
    explanation: "The S1 nerve root is responsible for innervating muscles involved in plantarflexion and provides sensory input to the outer foot. The other nerve roots (L2, L3, L4) are associated with different sensory and motor regions in the lower limbs."
},
{
    question: "A patient has suffered a cervical spine injury resulting in paralysis of the upper limbs. Which vertebral level is most likely affected?",
    choices: [
        "C1",
        "C3",
        "C5",
        "T1"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "C5.")
    explanation: "The C5 vertebral level is commonly associated with motor control of the upper limbs, particularly affecting the muscles responsible for shoulder movement and elbow flexion. Injury at or above C5 can lead to significant paralysis of the upper limbs. Higher cervical injuries, such as at C1 or C3, would also affect respiration due to involvement of the diaphragm. However, T1 primarily affects muscles in the hands and would not cause complete upper limb paralysis."
},
{
    question: "A 67-year-old woman presents with difficulty walking and urinary incontinence. MRI reveals spinal stenosis at the lumbar level. Which structure is most likely compressing the cauda equina?",
    choices: [
        "Ligamentum flavum hypertrophy",
        "Posterior longitudinal ligament thickening",
        "Nucleus pulposus herniation",
        "Vertebral artery occlusion"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Ligamentum flavum hypertrophy.")
    explanation: "In cases of spinal stenosis, ligamentum flavum hypertrophy can compress the cauda equina, leading to symptoms like difficulty walking and urinary incontinence. The thickening narrows the spinal canal, causing nerve compression, while other options such as vertebral artery occlusion are unrelated to the cauda equina."
},
{
    question: "A 32-year-old woman presents with neck pain following a car accident. Imaging shows dislocation of the atlanto-axial joint. Which ligament is most likely compromised?",
    choices: [
        "Transverse ligament of the atlas",
        "Alar ligament",
        "Supraspinous ligament",
        "Posterior longitudinal ligament"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Transverse ligament of the atlas.")
    explanation: "The transverse ligament of the atlas stabilizes the atlanto-axial joint by holding the dens of the axis (C2) against the anterior arch of the atlas (C1). Dislocation of this joint, especially after trauma like a car accident, suggests the transverse ligament is compromised, leading to potential instability."
},
{
    question: "A patient has suffered a burst fracture of the L1 vertebra due to a fall. What is the most appropriate imaging modality to evaluate spinal cord compression?",
    choices: [
        "X-ray",
        "CT scan",
        "MRI",
        "Ultrasound"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "MRI.")
    explanation: "MRI is the most appropriate imaging modality to evaluate spinal cord compression, as it provides detailed images of soft tissues, including the spinal cord and nerve roots. X-ray and CT scans are useful for visualizing bone fractures, but MRI is superior for assessing potential damage to the spinal cord."
},



{
    question: "A 25-year-old male presents with chronic back pain. Physical exam shows hyperlordosis. Which of the following structures is primarily responsible for maintaining the curvature of the lumbar spine?",
    choices: [
        "Erector spinae muscles",
        "Transversospinalis muscles",
        "Quadratus lumborum",
        "Psoas major"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Erector spinae muscles.")
    explanation: "The erector spinae muscles are primarily responsible for maintaining the lumbar lordosis (the natural inward curvature of the lower back), supporting the spine in an upright position. Other muscles play different roles in spine movement or stabilization but are not the main muscles maintaining this curvature."
},
{
    question: "A 60-year-old woman presents with severe kyphosis. Which of the following conditions is most likely responsible for this deformity?",
    choices: [
        "Osteoarthritis",
        "Osteoporosis",
        "Disc herniation",
        "Spinal stenosis"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Osteoporosis.")
    explanation: "Kyphosis is an exaggerated thoracic curvature, often caused by vertebral compression fractures due to osteoporosis. Osteoporosis weakens the bones, leading to the collapse of the anterior vertebral bodies, resulting in kyphosis."
}

];

let currentQuestionIndex = 0;
let score = 0;
let isExplanationShown = false;

const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const explanationContainer = document.getElementById("explanation");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");

// Load the first question
loadQuestion();

function loadQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
        
    // Dynamically change the title to show the current question number
    const quizTitle = document.querySelector('h1');
    quizTitle.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    
    // Show question
    questionContainer.textContent = currentQuestion.question;
    
    // Show choices
    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => selectAnswer(index));
        choicesContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Check if the correct answer is chosen
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('modal-text').textContent = "Correct! " + currentQuestion.explanation;
        document.body.style.backgroundColor = "green"; // Change background to green if correct
    } else {
        document.getElementById('modal-text').textContent = "Incorrect. " + currentQuestion.explanation;
        document.body.style.backgroundColor = "red"; // Change background to red if incorrect
    }
    
    // Show the modal
    const modal = document.getElementById("explanation-modal");
    modal.style.display = "block";

    isExplanationShown = true;
    nextButton.classList.remove("hidden");

    // Disable choices and change button colors
    const buttons = choicesContainer.querySelectorAll("button");
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === currentQuestion.correctAnswer) {
            button.style.backgroundColor = "green"; // Highlight the correct answer
        } else if (index === selectedIndex) {
            button.style.backgroundColor = "red"; // Highlight the incorrect selected answer
        } else {
            button.style.backgroundColor = "gray"; // Neutral for unselected options
        }
    });
}

// Close the modal when the user clicks the close button
document.getElementById("close-modal").onclick = function() {
    document.getElementById("explanation-modal").style.display = "none";
}
    
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.classList.add("hidden");
    choicesContainer.classList.add("hidden");
    nextButton.classList.add("hidden");
    
    scoreContainer.classList.remove("hidden");
    scoreContainer.textContent = `Your score: ${score} out of ${quizData.length}`;
}

function resetState() {
    nextButton.classList.add("hidden");
    choicesContainer.innerHTML = "";
    document.body.style.backgroundColor = ""; // Reset background color
    document.getElementById("explanation-modal").style.display = "none"; // Hide the modal
}

// Event listener for the next button
nextButton.addEventListener("click", () => {
    if (isExplanationShown) {
        isExplanationShown = false;
        nextQuestion();
    }
});
