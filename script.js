// Quiz questions and answers
let allQuizData = [
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
},
   {
    question: "Which type of cell is responsible for secreting the extracellular matrix (ECM) in connective tissue?",
    choices: [
        "Macrophage",
        "Mast cell",
        "Fibroblast",
        "Adipocyte"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Fibroblast.")
    explanation: "Fibroblasts are the cells responsible for secreting the extracellular matrix (ECM) in connective tissue, producing collagen, elastin, and other components that provide structural support."
},
{
    question: "What type of connective tissue is predominantly found in tendons?",
    choices: [
        "Loose connective tissue",
        "Dense regular connective tissue",
        "Dense irregular connective tissue",
        "Adipose tissue"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Dense regular connective tissue.")
    explanation: "Dense regular connective tissue is predominantly found in tendons. It is composed of parallel collagen fibers that provide tensile strength, which is essential for transmitting forces between muscles and bones."
},
{
    question: "Which glycosaminoglycan (GAG) is the largest and most abundant in the extracellular matrix?",
    choices: [
        "Dermatan sulfate",
        "Hyaluronic acid",
        "Heparan sulfate",
        "Chondroitin sulfate"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Hyaluronic acid.")
    explanation: "Hyaluronic acid is the largest and most abundant glycosaminoglycan (GAG) in the extracellular matrix. It plays a key role in maintaining tissue hydration and structure."
},
{
    question: "What type of collagen is found in the basal lamina (basement membrane)?",
    choices: [
        "Type I",
        "Type II",
        "Type IV",
        "Type III"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Type IV.")
    explanation: "Type IV collagen is found in the basal lamina (basement membrane), providing structural support and regulating cell adhesion. It forms a network rather than fibrils, which is unique compared to other collagen types."
},
{
    question: "A 35-year-old man sustains a partial tear in his Achilles tendon. What type of collagen is primarily involved in the repair process of this tissue?",
    choices: [
        "Type I",
        "Type II",
        "Type IV",
        "Type VII"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Type I.")
    explanation: "The Achilles tendon, like other tendons, is primarily composed of Type I collagen, which provides tensile strength to the tissue. When a tendon is injured, the repair process involves the production of Type I collagen to restore its structure and function."
},
{
    question: "A patient with Marfan syndrome presents with aortic dissection. Which protein is likely deficient, affecting the assembly of elastic fibers?",
    choices: [
        "Collagen type III",
        "Elastin",
        "Fibrillin",
        "Laminin"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Fibrillin.")
    explanation: "Fibrillin provides structural support to elastic fibers, which are important for the elasticity and integrity of tissues such as blood vessels, skin, and ligaments. In patients with Marfan syndrome, the deficiency in fibrillin leads to weakened elastic fibers, resulting in vascular complications, including aortic dissection."
},
{
    question: "A 65-year-old male patient presents with progressive kidney failure, vision loss, and hearing impairment. Genetic testing reveals a mutation in collagen type IV. What is the most likely diagnosis?",
    choices: [
        "Marfan syndrome",
        "Osteogenesis imperfecta",
        "Alport syndrome",
        "Ehlers-Danlos syndrome"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Alport syndrome.")
    explanation: "Alport syndrome is caused by mutations in genes encoding type IV collagen. It commonly presents with kidney failure, vision loss, and hearing impairment due to weakened basal lamina, which affects the kidney's filtration, as well as structures in the eyes and ears."
},
{
    question: "A 40-year-old woman presents with delayed wound healing after surgery. Examination shows excessive fibroblast activity and an accumulation of collagen. Which complication is the patient most likely experiencing?",
    choices: [
        "Keloid scar formation",
        "Chronic ulcer",
        "Fibrosis",
        "Tendon rupture"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Keloid scar formation.")
    explanation: "Keloid scar formation occurs due to excessive fibroblast activity and collagen accumulation during wound healing. It results in raised, thickened scars that extend beyond the original wound borders."
},
{
    question: "Which layer of the epidermis contains the stem cells responsible for regenerating the epidermis?",
    choices: [
        "Stratum corneum",
        "Stratum granulosum",
        "Stratum spinosum",
        "Stratum basale"
    ],
    correctAnswer: 3, // The correct answer index (in this case, "Stratum basale.")
    explanation: "The stratum basale is the innermost layer of the epidermis where keratinocyte stem cells are located. These stem cells are responsible for regenerating the epidermis, continuously producing new cells that migrate upwards through the layers."
},
{
    question: "What protein is defective in patients with bullous pemphigoid, leading to blister formation?",
    choices: [
        "Type IV collagen",
        "Desmoglein",
        "BP180 (Type XVII collagen)",
        "Fibrillin"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "BP180 (Type XVII collagen).")
    explanation: "Bullous pemphigoid results from an autoimmune attack on the basement membrane of the epidermis by IgG and sometimes IgE antibodies, leading to blister formation. The primary target is the protein BP180 (Type XVII collagen), which is associated with hemidesmosomes that help anchor the epidermal keratinocytes to the dermis, creating a waterproof seal."
},
{
    question: "Which layer of the epidermis provides the primary water-impermeant barrier?",
    choices: [
        "Stratum corneum",
        "Stratum spinosum",
        "Stratum granulosum",
        "Stratum basale"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Stratum corneum.")
    explanation: "The stratum corneum is composed of dead cells (squames) that lack nuclei and organelles. It consists of a cell envelope made up of lipids and hydrophobic proteins like loricrin and filaggrin, forming a water-impermeant barrier that protects the skin."
},
{
    question: "Which gland is involved in thermoregulation and is most widely distributed across the skin?",
    choices: [
        "Apocrine gland",
        "Sebaceous gland",
        "Eccrine gland",
        "Ceruminous gland"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Eccrine gland.")
    explanation: "The eccrine glands are the primary sweat glands responsible for thermoregulation. They are widely distributed across the skin, especially on the palms, soles, and forehead, producing sweat that cools the body through evaporation."
},
{
    question: "A 25-year-old woman presents with symmetric hyperpigmented patches on her cheeks and forehead after starting oral contraceptives. What is the most likely diagnosis?",
    choices: [
        "Vitiligo",
        "Albinism",
        "Melasma",
        "Psoriasis"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Melasma.")
    explanation: "Melasma (chloasma) is acquired hyperpigmentation that can be associated with hormonal changes, such as pregnancy or oral contraceptive use. It results from increased melanin production stimulated by estrogen and progesterone, particularly after sun exposure."
},
{
    question: "A 65-year-old man presents with a large blister on his thigh that appeared spontaneously. A biopsy reveals IgG deposits at the dermo-epidermal junction. What is the most likely diagnosis?",
    choices: [
        "Pemphigus vulgaris",
        "Bullous pemphigoid",
        "Contact dermatitis",
        "Psoriasis"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Bullous pemphigoid.")
    explanation: "Bullous pemphigoid is a chronic blistering disease, most common in the elderly, characterized by large bullae and IgG deposits at the dermo-epidermal junction. These antibodies target the basement membrane, leading to separation of the epidermis from the dermis."
},
{
    question: "A patient presents with sharply demarcated, silvery plaques on the extensor surfaces of their elbows and knees. Histological examination shows parakeratosis and elongation of rete ridges. What is the underlying pathology?",
    choices: [
        "Pemphigus vulgaris",
        "Psoriasis",
        "Eczema",
        "Bullous pemphigoid"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Psoriasis.")
    explanation: "Psoriasis is characterized by sharply demarcated, silvery plaques typically found on extensor surfaces such as the elbows and knees. Histologically, it shows parakeratosis and elongation of rete ridges, which are indicative of abnormal skin cell turnover and differentiation."
},
{
    question: "A 45-year-old woman presents with depigmented patches on her hands. She has a history of autoimmune thyroid disease. What is the most likely diagnosis?",
    choices: [
        "Albinism",
        "Vitiligo",
        "Melasma",
        "Psoriasis"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Vitiligo.")
    explanation: "Vitiligo is characterized by irregular patches of complete depigmentation caused by the destruction of melanocytes, often associated with autoimmune diseases like thyroid disorders."
},
{
    question: "A 30-year-old male patient has been diagnosed with cystic fibrosis. During a sweat test, his sweat was found to be abnormally salty. Which structure is defective, leading to this symptom?",
    choices: [
        "Apocrine gland",
        "Eccrine gland",
        "Sebaceous gland",
        "Merkel cell"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Eccrine gland.")
    explanation: "In cystic fibrosis, the CFTR chloride channel in the epithelial ductal cells of the eccrine sweat glands is defective, preventing the reabsorption of chloride ions. This leads to abnormally salty sweat, which is a hallmark of the disease."
},
{
    question: "A biopsy of a pigmented lesion on a 55-year-old man shows malignant melanocytes extending into the dermis. What is the most likely diagnosis?",
    choices: [
        "Basal cell carcinoma",
        "Squamous cell carcinoma",
        "Melanoma",
        "Actinic keratosis"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Melanoma.")
    explanation: "Melanoma is a tumor caused by the malignant transformation of melanocytes. While melanomas most commonly occur on the skin, they can also arise in other locations where neural crest cells migrate, such as the gastrointestinal tract and brain."
},
{
    question: "A patient presents with multiple small, fluid-filled vesicles that rupture easily, leaving erosions. Biopsy reveals antibodies against desmogleins. What is the most likely diagnosis?",
    choices: [
        "Pemphigus vulgaris",
        "Bullous pemphigoid",
        "Vitiligo",
        "Albinism"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Pemphigus vulgaris.")
    explanation: "Pemphigus vulgaris is characterized by autoantibodies targeting keratinocyte proteins called desmogleins, leading to acantholysis and loss of adhesion between keratinocytes. This results in the formation of fluid-filled vesicles that easily rupture, causing erosions."
},
{
    question: "What skin condition is characterized by chronic pruritic, grouped vesicles primarily on the elbows and knees, and is associated with gluten sensitivity?",
    choices: [
        "Bullous pemphigoid",
        "Dermatitis herpetiformis",
        "Pemphigus vulgaris",
        "Erythema multiforme"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Dermatitis herpetiformis.")
    explanation: "Dermatitis herpetiformis is a chronic, relapsing blistering disease characterized by severely pruritic grouped vesicles, primarily on the elbows and knees. It is associated with gluten sensitivity and has a genetic predisposition linked to HLA-B8. The autoantigen involved is epidermal transglutaminase (TG3), and treatment includes dapsone and a gluten-free diet."
},
{
    question: "A 50-year-old woman presents with painful erosions and bullae on her oral mucosa and scalp. A biopsy shows acantholysis and intraepidermal vesicles. Direct immunofluorescence (DIF) reveals IgG deposits in a 'chicken wire' pattern around keratinocytes. What is the most likely diagnosis?",
    choices: [
        "Bullous pemphigoid",
        "Pemphigus vulgaris",
        "Dermatitis herpetiformis",
        "Erythema multiforme"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Pemphigus vulgaris.")
    explanation: "The clinical presentation and biopsy findings strongly suggest pemphigus vulgaris, an autoimmune blistering disorder characterized by painful erosions and bullae on the oral mucosa and scalp. The biopsy shows acantholysis, leading to intraepidermal vesicles. Direct immunofluorescence reveals IgG deposits in a 'chicken wire' pattern, indicating autoantibodies against desmoglein 3, which disrupt keratinocyte connections and cause blister formation."
},
{
    question: "A 70-year-old man presents with large, tense blisters on his forearms and axillae. The blisters are pruritic, and Nikolsky sign is negative. Direct immunofluorescence shows linear IgG deposition along the basement membrane. What is the most likely diagnosis?",
    choices: [
        "Pemphigus vulgaris",
        "Bullous pemphigoid",
        "Dermatitis herpetiformis",
        "Epidermolysis bullosa"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Bullous pemphigoid.")
    explanation: "The patient presents with large, tense blisters on the forearms and axillae that are pruritic. The negative Nikolsky sign indicates that the blisters do not easily rupture upon skin manipulation, distinguishing bullous pemphigoid from pemphigus vulgaris. Direct immunofluorescence shows linear IgG deposition along the basement membrane, characteristic of bullous pemphigoid, caused by autoantibodies targeting hemidesmosomes."
},
{
    question: "A newborn presents with widespread blisters that easily rupture, leading to significant skin fragility. Clinical examination reveals 'mitten' and 'sock' deformities of the hands and feet. Genetic testing confirms a defect in collagen type VII. What is the most likely diagnosis?",
    choices: [
        "Epidermolysis bullosa simplex",
        "Junctional epidermolysis bullosa",
        "Dystrophic epidermolysis bullosa",
        "Bullous pemphigoid"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Dystrophic epidermolysis bullosa.")
    explanation: "The clinical presentation is characteristic of dystrophic epidermolysis bullosa (DEB), a genetic skin disorder caused by mutations in collagen type VII, which is essential for anchoring the epidermis to the dermis. Widespread blisters that easily rupture and the presence of 'mitten' and 'sock' deformities are typical of this condition, particularly in autosomal recessive DEB."
},
{
    question: "A 60-year-old woman presents with multiple scaly erosions on her face, scalp, and upper back. Biopsy reveals superficial acantholysis and immunofluorescence shows IgG antibodies targeting desmoglein 1. What is the most likely diagnosis?",
    choices: [
        "Pemphigus foliaceous",
        "Bullous pemphigoid",
        "Dermatitis herpetiformis",
        "Epidermolysis bullosa"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Pemphigus foliaceous.")
    explanation: "Pemphigus foliaceous is characterized by antibodies targeting desmoglein 1, leading to superficial acantholysis and the development of scaly erosions. The condition presents with superficial 'cornflake' peeling, typically affecting the face, scalp, and upper back."
},
{
    question: "A 25-year-old woman presents with widespread skin erosions after developing a mild viral illness. Nikolsky sign is positive, and a biopsy shows intraepidermal blistering and widespread acantholysis. Immunofluorescence reveals IgG antibodies against desmosomes. What is the best initial treatment?",
    choices: [
        "Topical corticosteroids",
        "Gluten-free diet",
        "Systemic corticosteroids and immunosuppressants",
        "Antibiotics"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Systemic corticosteroids and immunosuppressants.")
    explanation: "The patient's presentation is consistent with pemphigus vulgaris, an autoimmune blistering disorder characterized by intraepidermal blistering and positive Nikolsky sign. The best initial treatment is systemic corticosteroids and immunosuppressants, which suppress the autoimmune process and reduce inflammation."
},
{
    question: "A patient presents with a disc herniation at the L4-L5 level. Which nerve root is most likely compressed, and what symptoms might this cause?",
    choices: [
        "L3; quadriceps weakness",
        "L4; knee extension difficulty",
        "L5; weakness in foot dorsiflexion",
        "S1; weakness in plantar flexion"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "L5; weakness in foot dorsiflexion.")
    explanation: "A disc herniation at the L4-L5 level typically compresses the L5 nerve root, which controls muscles responsible for foot dorsiflexion. This can lead to weakness in dorsiflexion (foot drop) and pain or numbness along the lateral aspect of the leg and top of the foot. L3 involvement would cause quadriceps weakness, L4 might lead to knee extension difficulty, and S1 compression usually results in weakness in plantar flexion."
},
{
    question: "A patient suffers a traumatic injury, severing the anterior spinal artery. Which function would be most affected by this injury?",
    choices: [
        "Proprioception",
        "Pain and temperature sensation",
        "Fine touch and vibration sensation",
        "Autonomic regulation"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Pain and temperature sensation.")
    explanation: "The anterior spinal artery supplies the anterior two-thirds of the spinal cord, including the spinothalamic tracts responsible for pain and temperature sensation. Damage to this artery would lead to a loss of pain and temperature sensation below the level of the injury. Proprioception and fine touch and vibration sensation are carried by the dorsal columns, supplied by the posterior spinal arteries, and would not be primarily affected by anterior spinal artery injury."
},
{
    question: "A 29-year-old man has a lesion in the dorsal column of the spinal cord at the T10 level. Which sensory function is most likely affected?",
    choices: [
        "Pain and temperature sensation from the lower limbs",
        "Fine touch and proprioception from the lower limbs",
        "Motor function of the lower limbs",
        "Reflex response of the lower limbs"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Fine touch and proprioception from the lower limbs.")
    explanation: "The dorsal columns of the spinal cord are responsible for transmitting fine touch, vibration, and proprioception to the brain. A lesion at the T10 level would specifically affect these sensations below the level of the lesion, particularly in the lower limbs."
},
{
    question: "A 55-year-old male presents with weakness and fasciculations in his lower extremities. Imaging reveals damage to the ventral horn of the spinal cord. Which type of neurons are primarily affected, and what would you expect to see on physical examination?",
    choices: [
        "Sensory neurons; increased reflexes",
        "Motor neurons; flaccid paralysis",
        "Autonomic neurons; spastic paralysis",
        "Sensory neurons; loss of proprioception"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Motor neurons; flaccid paralysis.")
    explanation: "The ventral horn of the spinal cord contains lower motor neurons that innervate skeletal muscles. Damage to these neurons results in flaccid paralysis, characterized by muscle weakness, decreased muscle tone, and fasciculations. Lower motor neuron lesions lead to decreased or absent reflexes, and over time, muscle atrophy due to denervation."
},
{
    question: "A patient presents with difficulty breathing following a traumatic injury to the cervical spine at C4. Which structure is most likely impaired, leading to the patient's respiratory distress?",
    choices: [
        "Dorsal root ganglion",
        "Phrenic nerve",
        "Ventral horn of the lumbar spinal cord",
        "Sympathetic trunk"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Phrenic nerve.")
    explanation: "The phrenic nerve, originating from the C3-C5 spinal nerve roots, innervates the diaphragm, the primary muscle responsible for breathing. An injury to the cervical spine at C4 can impair the phrenic nerve, leading to respiratory distress due to diaphragm dysfunction."
},
{
    question: "Which neurotransmitter is released by the presynaptic neuron in both the sympathetic and parasympathetic divisions of the autonomic nervous system?",
    choices: [
        "Norepinephrine",
        "Acetylcholine",
        "Dopamine",
        "Epinephrine"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Acetylcholine.")
    explanation: "Acetylcholine is the neurotransmitter released by the presynaptic (preganglionic) neurons in both the sympathetic and parasympathetic divisions of the autonomic nervous system. In the parasympathetic division, it is also released at the postsynaptic neurons, while norepinephrine is released in the postsynaptic neurons of the sympathetic division."
},
{
    question: "Where are the cell bodies of presynaptic sympathetic neurons located?",
    choices: [
        "Lateral horn of the spinal cord from T1-L2/3",
        "Dorsal root ganglia",
        "Brainstem",
        "Sacral spinal cord"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Lateral horn of the spinal cord from T1-L2/3.")
    explanation: "The cell bodies of presynaptic sympathetic neurons are located in the lateral horn of the spinal cord, specifically from T1 to L2/3. This region is responsible for the sympathetic outflow of the autonomic nervous system."
},
{
    question: "Which cranial nerve provides parasympathetic innervation to most of the thoracic and abdominal organs?",
    choices: [
        "CN III (Oculomotor)",
        "CN VII (Facial)",
        "CN IX (Glossopharyngeal)",
        "CN X (Vagus)"
    ],
    correctAnswer: 3, // The correct answer index (in this case, "CN X (Vagus).")
    explanation: "The vagus nerve (CN X) provides parasympathetic innervation to most of the thoracic and abdominal organs, playing a crucial role in regulating heart rate, digestion, and respiratory rate."
},
{
    question: "What is the main neurotransmitter released by the postsynaptic sympathetic neurons, except for sweat glands?",
    choices: [
        "Acetylcholine",
        "Norepinephrine",
        "Epinephrine",
        "Dopamine"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Norepinephrine.")
    explanation: "In the sympathetic nervous system, norepinephrine is the main neurotransmitter released by postsynaptic neurons, except in the case of sweat glands, where acetylcholine is released. Norepinephrine acts on adrenergic receptors to mediate the 'fight or flight' responses."
},
{
    question: "Which autonomic division is responsible for constriction of the pupils and increased GI motility?",
    choices: [
        "Sympathetic",
        "Parasympathetic",
        "Enteric",
        "Somatic"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Parasympathetic.")
    explanation: "The parasympathetic nervous system is responsible for pupil constriction (miosis) and increased gastrointestinal (GI) motility, promoting functions that conserve energy and support digestion. The sympathetic nervous system has the opposite effects, causing pupil dilation and decreased GI motility."
},
{
    question: "A patient presents with a rapid heart rate and dilated pupils after a stressful encounter. Which autonomic division is responsible for these effects, and what neurotransmitter is primarily involved?",
    choices: [
        "Parasympathetic; acetylcholine",
        "Sympathetic; norepinephrine",
        "Enteric; serotonin",
        "Parasympathetic; norepinephrine"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Sympathetic; norepinephrine.")
    explanation: "The sympathetic nervous system is responsible for the 'fight or flight' response, which includes effects like rapid heart rate (tachycardia) and pupil dilation (mydriasis). The primary neurotransmitter involved in these responses is norepinephrine, which stimulates adrenergic receptors to activate these physiological changes."
},
{
    question: "A patient is given a muscarinic receptor agonist to stimulate bladder contraction. Which division of the autonomic nervous system is being targeted, and what neurotransmitter normally binds to these receptors?",
    choices: [
        "Sympathetic; norepinephrine",
        "Parasympathetic; acetylcholine",
        "Sympathetic; acetylcholine",
        "Enteric; norepinephrine"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Parasympathetic; acetylcholine.")
    explanation: "Muscarinic receptors are part of the parasympathetic nervous system, and the neurotransmitter that normally binds to these receptors is acetylcholine. Stimulating muscarinic receptors promotes actions like bladder contraction, which is a parasympathetic function."
},
{
    question: "A 45-year-old woman is experiencing difficulty with digestion and constipation. Which part of the autonomic nervous system is most likely underactive, and which neurotransmitter is involved?",
    choices: [
        "Sympathetic; norepinephrine",
        "Parasympathetic; acetylcholine",
        "Sympathetic; acetylcholine",
        "Enteric; norepinephrine"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Parasympathetic; acetylcholine.")
    explanation: "The parasympathetic nervous system is primarily responsible for promoting digestion and gastrointestinal motility, and its main neurotransmitter is acetylcholine. If the parasympathetic system is underactive, it can lead to symptoms like difficulty with digestion and constipation due to reduced stimulation of the gastrointestinal tract."
},
{
    question: "A patient is in the emergency department with signs of shock. To increase the patient’s blood pressure, a drug that mimics the sympathetic response is administered. How does this drug increase blood pressure, and which receptor does it likely target?",
    choices: [
        "By dilating blood vessels; muscarinic receptors",
        "By constricting blood vessels; alpha-adrenergic receptors",
        "By increasing heart rate; nicotinic receptors",
        "By decreasing heart rate; beta-adrenergic receptors"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "By constricting blood vessels; alpha-adrenergic receptors.")
    explanation: "In cases of shock, drugs that mimic the sympathetic response often target alpha-adrenergic receptors to cause vasoconstriction, which increases blood pressure. This helps redirect blood flow to vital organs and raises systemic blood pressure."
},
{
    question: "A 60-year-old patient is prescribed a beta-blocker for hypertension. Which part of the autonomic nervous system does this medication act on, and what is its effect on the heart?",
    choices: [
        "Sympathetic nervous system; decreases heart rate",
        "Parasympathetic nervous system; increases heart rate",
        "Enteric nervous system; increases GI motility",
        "Sympathetic nervous system; increases blood pressure"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Sympathetic nervous system; decreases heart rate.")
    explanation: "Beta-blockers act on the sympathetic nervous system by blocking beta-adrenergic receptors, primarily in the heart. This reduces the effects of sympathetic stimulation, leading to a decrease in heart rate and a reduction in blood pressure, making them effective for treating hypertension."
},
{
    question: "A patient presents with a drooping eyelid (ptosis) and anhidrosis (lack of sweating) on one side of the face. Which sympathetic pathway is most likely disrupted in this patient?",
    choices: [
        "Cardiopulmonary splanchnic nerve",
        "Cervical sympathetic trunk",
        "Enteric nervous system",
        "Sacral parasympathetic outflow"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Cervical sympathetic trunk.")
    explanation: "Disruption of the cervical sympathetic trunk can result in Horner's syndrome, characterized by ptosis (drooping eyelid), miosis (pupil constriction), and anhidrosis (lack of sweating) on one side of the face. This condition arises from the loss of sympathetic nerve supply to the head and neck."
},
{
    question: "A 35-year-old man experiences severe, acute abdominal pain, but reports that the pain feels like it’s coming from his back. What phenomenon is responsible for this mislocalization of pain, and through which fibers does the pain signal travel?",
    choices: [
        "Referred pain; visceral afferent fibers",
        "Referred pain; somatic efferent fibers",
        "Central pain; visceral efferent fibers",
        "Peripheral pain; somatic afferent fibers"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Referred pain; visceral afferent fibers.")
    explanation: "Referred pain occurs when pain from an internal organ is perceived as coming from a different, usually somatic location (like the back). This mislocalization happens because visceral and somatic sensory signals converge in the spinal cord, and the pain signal is carried by visceral afferent fibers."
},
{
    question: "Which cell type is responsible for forming the myelin sheath in the peripheral nervous system (PNS)?",
    choices: [
        "Oligodendrocytes",
        "Schwann cells",
        "Astrocytes",
        "Microglia"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Schwann cells.")
    explanation: "Schwann cells are responsible for forming the myelin sheath around axons in the peripheral nervous system (PNS), helping to insulate the axons and speed up nerve signal transmission. Oligodendrocytes perform a similar function in the central nervous system (CNS), while astrocytes and microglia have other supportive and immune functions."
},
{
    question: "What type of neuron is typically found in the dorsal root ganglia of the spinal cord?",
    choices: [
        "Multipolar neurons",
        "Pseudo-unipolar neurons",
        "Bipolar neurons",
        "Motor neurons"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Pseudo-unipolar neurons.")
    explanation: "Pseudo-unipolar neurons are typically found in the dorsal root ganglia of the spinal cord and are responsible for transmitting sensory information from the periphery to the central nervous system. These neurons have a single process that bifurcates into two branches: one extending to the periphery and the other to the spinal cord."
},
{
    question: "Which neurotransmitter is commonly associated with synaptic transmission at the neuromuscular junction?",
    choices: [
        "Dopamine",
        "Norepinephrine",
        "Acetylcholine",
        "Serotonin"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Acetylcholine.")
    explanation: "Acetylcholine is the neurotransmitter responsible for synaptic transmission at the neuromuscular junction, where it binds to receptors on muscle cells, triggering muscle contraction. Other neurotransmitters like dopamine, norepinephrine, and serotonin are involved in different neural pathways."
},
{
    question: "What is the primary function of satellite cells in the peripheral nervous system?",
    choices: [
        "Phagocytosis",
        "Myelination of axons",
        "Structural and metabolic support to neurons",
        "Formation of the blood-brain barrier"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Structural and metabolic support to neurons.")
    explanation: "In the peripheral nervous system, satellite cells surround neuronal cell bodies in ganglia and provide structural and metabolic support, helping to regulate the environment around neurons. They do not perform phagocytosis (a function of microglia in the CNS), myelination (a function of Schwann cells in the PNS), or formation of the blood-brain barrier (handled by astrocytes in the CNS)."
},
{
    question: "Which glial cell type in the central nervous system (CNS) is involved in forming the blood-brain barrier?",
    choices: [
        "Microglia",
        "Oligodendrocytes",
        "Astrocytes",
        "Schwann cells"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Astrocytes.")
    explanation: "In the central nervous system (CNS), astrocytes play a key role in forming and maintaining the blood-brain barrier. They send out processes called end-feet that surround blood vessels, regulating the passage of substances between the bloodstream and the brain. Microglia are the immune cells of the CNS, oligodendrocytes produce myelin in the CNS, and Schwann cells are responsible for myelination in the peripheral nervous system."
},
{
    question: "A 55-year-old man is diagnosed with Guillain-Barré syndrome (GBS), an autoimmune disorder that leads to demyelination in the peripheral nervous system. Which cells are primarily targeted in this condition?",
    choices: [
        "Oligodendrocytes",
        "Astrocytes",
        "Schwann cells",
        "Microglia"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Schwann cells.")
    explanation: "In Guillain-Barré syndrome (GBS), the immune system attacks Schwann cells, which produce myelin in the peripheral nervous system. This results in demyelination of peripheral nerves, leading to symptoms such as muscle weakness and sensory disturbances. Oligodendrocytes produce myelin in the central nervous system, while astrocytes and microglia serve different roles in support and immune response."
},
{
    question: "A biopsy of the spinal cord reveals large neurons with abundant Nissl bodies located in the anterior horn. Which function do these neurons primarily serve?",
    choices: [
        "Sensory transmission",
        "Motor control of skeletal muscles",
        "Autonomic regulation",
        "Pain modulation"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Motor control of skeletal muscles.")
    explanation: "The large neurons in the anterior horn of the spinal cord are motor neurons responsible for controlling skeletal muscles. They have abundant Nissl bodies, indicating high levels of protein synthesis for neurotransmitter production. Sensory transmission is mediated by neurons in the dorsal horn, while autonomic regulation and pain modulation involve different neural pathways."
},
{
    question: "A 45-year-old woman presents with loss of proprioception and vibration sensation in her lower limbs. A spinal cord lesion is suspected in the dorsal column. What type of neuron is likely affected in this case?",
    choices: [
        "Bipolar neurons",
        "Pseudo-unipolar neurons",
        "Multipolar neurons",
        "Motor neurons"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Pseudo-unipolar neurons.")
    explanation: "Pseudo-unipolar neurons are sensory neurons responsible for transmitting proprioception and vibration sensations. They have a single process that splits into two branches, one connecting to the spinal cord and the other to peripheral sensory receptors. The dorsal column of the spinal cord carries sensory information from these neurons, while bipolar neurons are involved in special senses and multipolar neurons are typically motor neurons."
},
{
    question: "A patient presents with muscle weakness and atrophy in their left arm. Histopathology reveals degeneration of myelinated axons in the left brachial plexus. Which of the following best describes the process occurring in the affected nerve fibers?",
    choices: [
        "Retrograde degeneration of Schwann cells",
        "Wallerian degeneration of the axons",
        "Hyperplasia of oligodendrocytes",
        "Demyelination by astrocytes"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Wallerian degeneration of the axons.")
    explanation: "Wallerian degeneration refers to the process where the distal portion of a severed or damaged axon degenerates after injury, characteristic of peripheral nerve injuries like those in the brachial plexus. Retrograde degeneration involves the nerve cell body, while oligodendrocytes and astrocytes are involved in the central nervous system, not peripheral nerves."
},
{
    question: "A 30-year-old man sustains a traumatic injury resulting in a crushed peripheral nerve. One month later, regenerating axons are noted. What structure is likely guiding the regenerating axons toward their targets?",
    choices: [
        "Satellite cells",
        "Schwann cells",
        "Oligodendrocytes",
        "Microglia"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Schwann cells.")
    explanation: "In the peripheral nervous system, Schwann cells play a crucial role in nerve regeneration by forming a guiding structure called the Bands of Büngner, which directs regenerating axons toward their target tissues. Satellite cells support neurons in ganglia, while oligodendrocytes are involved in myelination in the central nervous system, and microglia act as immune cells in the central nervous system."
},
{
    question: "A 60-year-old woman presents with muscle weakness and difficulty walking. Imaging shows hypertrophic nerve roots, and a biopsy reveals 'onion bulb' formations due to repetitive demyelination and remyelination cycles. Which inherited neuropathy is most consistent with this finding?",
    choices: [
        "Charcot-Marie-Tooth disease",
        "Guillain-Barré syndrome",
        "Amyotrophic lateral sclerosis",
        "Diabetic neuropathy"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Charcot-Marie-Tooth disease.")
    explanation: "Charcot-Marie-Tooth (CMT) disease is an inherited neuropathy characterized by progressive muscle weakness, difficulty walking, and hypertrophic nerve changes. The 'onion bulb' formations seen on biopsy are due to cycles of demyelination and remyelination, which are hallmarks of CMT. Other options like Guillain-Barré syndrome and amyotrophic lateral sclerosis do not present with these specific findings."
},
{
    question: "A 65-year-old man presents with progressive numbness and tingling in his extremities. Electromyography reveals a significant decrease in nerve conduction velocity. What type of neuropathy is most likely present, and what is the primary pathological process?",
    choices: [
        "Axonal neuropathy; degeneration of axons",
        "Demyelinating neuropathy; breakdown of myelin",
        "Autonomic neuropathy; loss of autonomic neurons",
        "Motor neuropathy; degeneration of motor neurons"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Demyelinating neuropathy; breakdown of myelin.")
    explanation: "A significant decrease in nerve conduction velocity is characteristic of demyelinating neuropathy, where the primary pathological process is the breakdown or loss of myelin, impairing the transmission of nerve signals. Axonal neuropathy involves damage to the axons, while autonomic and motor neuropathies focus on specific types of neurons and are not primarily characterized by slowed conduction."
},
{
    question: "Which cytokine is primarily involved in the pathogenesis of psoriasis and is a target for biologic therapies?",
    choices: [
        "IL-1",
        "IL-6",
        "IL-17",
        "IL-23"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "IL-17.")
    explanation: "IL-17 is primarily involved in the pathogenesis of psoriasis and is a key target for biologic therapies aimed at treating this condition. This cytokine plays a crucial role in promoting inflammation and the abnormal proliferation of skin cells characteristic of psoriasis."
},
{
    question: "What is the primary skin lesion associated with guttate psoriasis?",
    choices: [
        "Vesicle",
        "Papule",
        "Bulla",
        "Macule"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Papule.")
    explanation: "The primary skin lesion associated with guttate psoriasis is a papule. These small, raised lesions are often red and scaly, appearing suddenly, usually following a streptococcal infection."
},
{
    question: "What is the clinical term for pinpoint bleeding that occurs when the scale is removed from a psoriatic plaque?",
    choices: [
        "Nikolsky sign",
        "Auspitz sign",
        "Darier's sign",
        "Koebner phenomenon"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Auspitz sign.")
    explanation: "The clinical term for pinpoint bleeding that occurs when the scale is removed from a psoriatic plaque is called the Auspitz sign. This sign indicates the presence of vascular channels in the dermis that become exposed when the overlying scale is removed."
},
{
    question: "What are the hallmark clinical features of lichen planus?",
    choices: [
        "Pink, pustular, painful",
        "Purple, polygonal, pruritic papules",
        "Red, scaly, vesicular",
        "Yellow, greasy plaques"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Purple, polygonal, pruritic papules.")
    explanation: "The hallmark clinical features of lichen planus are purple, polygonal, pruritic papules. These lesions are typically flat-topped and may be seen on the skin, mucous membranes, and nails."
},
{
    question: "Which yeast is associated with seborrheic dermatitis, particularly in immunosuppressed patients?",
    choices: [
        "Candida",
        "Malassezia",
        "Cryptococcus",
        "Aspergillus"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Malassezia.")
    explanation: "Malassezia is the yeast associated with seborrheic dermatitis, especially in immunosuppressed patients. It is part of the normal skin flora but can overgrow in certain conditions, leading to inflammation and skin irritation."
},
{
    question: "A 32-year-old woman presents with well-demarcated, erythematous plaques covered with silvery-white scales on her elbows and knees. She has nail pitting and some joint pain in her fingers. What condition does she likely have, and what is the associated risk of developing?",
    choices: [
        "Psoriasis; increased risk of psoriatic arthritis",
        "Pityriasis rosea; increased risk of systemic lupus erythematosus",
        "Seborrheic dermatitis; increased risk of fungal infections",
        "Lichen planus; increased risk of liver disease"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Psoriasis; increased risk of psoriatic arthritis.")
    explanation: "Psoriasis commonly presents with well-demarcated, erythematous plaques covered with silvery-white scales, often on the elbows and knees. Nail pitting and joint pain, as described in this patient, are signs of psoriatic arthritis, which affects some individuals with psoriasis."
},
{
    question: "A patient with a history of psoriasis discontinues systemic corticosteroids abruptly. He develops generalized erythema with pustules and becomes febrile. What life-threatening condition is he experiencing?",
    choices: [
        "Erythrodermic psoriasis",
        "Guttate psoriasis",
        "Inverse psoriasis",
        "Seborrheic dermatitis"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Erythrodermic psoriasis.")
    explanation: "Erythrodermic psoriasis is a severe, life-threatening form of psoriasis characterized by widespread erythema, pustules, and systemic symptoms such as fever. It can occur after the abrupt discontinuation of systemic corticosteroids and requires urgent medical attention, while the other forms do not present with such widespread systemic symptoms."
},
{
    question: "A 22-year-old man develops small, scaly, erythematous papules on his trunk after a streptococcal throat infection. The lesions are teardrop-shaped. What is the most likely diagnosis?",
    choices: [
        "Guttate psoriasis",
        "Pityriasis rosea",
        "Lichen planus",
        "Nummular eczema"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Guttate psoriasis.")
    explanation: "Guttate psoriasis typically presents as small, scaly, teardrop-shaped erythematous papules on the trunk and is often triggered by a streptococcal throat infection. This form of psoriasis is common in young adults and can follow an upper respiratory infection."
},
{
    question: "A 40-year-old woman with hepatitis C develops violaceous, polygonal papules on her wrists and ankles. Some lesions show a lacy white pattern on the surface. What is the likely diagnosis, and which additional test might be useful?",
    choices: [
        "Psoriasis; liver function tests",
        "Lichen planus; hepatitis C screening",
        "Pityriasis rosea; ANA test",
        "Seborrheic dermatitis; fungal culture"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Lichen planus; hepatitis C screening.")
    explanation: "Lichen planus typically presents as violaceous, polygonal papules on the wrists and ankles, with a characteristic lacy white pattern (Wickham striae). There is a known association between lichen planus and hepatitis C, making hepatitis C screening a useful additional test."
},
{
    question: "A patient presents with a herald patch followed by smaller, salmon-colored plaques along the lines of skin cleavage. The patient complains of mild itching. What is the most likely diagnosis?",
    choices: [
        "Lichen planus",
        "Psoriasis",
        "Pityriasis rosea",
        "Seborrheic dermatitis"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Pityriasis rosea.")
    explanation: "Pityriasis rosea typically begins with a herald patch (a single, larger, oval, pink or salmon-colored lesion) followed by smaller plaques along skin cleavage lines in a 'Christmas tree' pattern. Mild itching is common, and this condition is self-limiting. Other conditions, such as lichen planus and psoriasis, exhibit different clinical features."
},
{
    question: "A 6-month-old infant presents with thick, greasy scales on the scalp. What is the diagnosis, and which organism is most likely implicated?",
    choices: [
        "Cradle cap (seborrheic dermatitis); Malassezia",
        "Tinea capitis; Trichophyton species",
        "Psoriasis; Staphylococcus aureus",
        "Atopic dermatitis; Streptococcus pyogenes"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Cradle cap (seborrheic dermatitis); Malassezia.")
    explanation: "Cradle cap is a form of seborrheic dermatitis that commonly affects infants, presenting as thick, greasy scales on the scalp. The condition is associated with the yeast Malassezia, part of the normal skin flora that can overgrow and contribute to this condition."
},
{
    question: "A 35-year-old man presents with well-demarcated red plaques with greasy scales on his scalp and nasolabial folds. His condition improves with antifungal shampoo. What is the most likely diagnosis, and what underlying condition might make this more severe?",
    choices: [
        "Psoriasis; diabetes",
        "Seborrheic dermatitis; HIV",
        "Lichen planus; hepatitis B",
        "Pityriasis rosea; chronic renal failure"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Seborrheic dermatitis; HIV.")
    explanation: "Seborrheic dermatitis presents with well-demarcated red plaques and greasy scales, commonly found on the scalp and nasolabial folds. It often improves with antifungal treatments, such as antifungal shampoo. This condition can be more severe in individuals with HIV due to immune system compromise, allowing for increased proliferation of Malassezia yeast."
},
{
    question: "Which histopathological feature is characteristic of acute spongiotic dermatitis?",
    choices: [
        "Hyperkeratosis",
        "Acanthosis",
        "Epidermal spongiosis",
        "Thickened collagen"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Epidermal spongiosis.")
    explanation: "Epidermal spongiosis is the characteristic histopathological feature of acute spongiotic dermatitis. It refers to the intercellular edema within the epidermis, leading to a swollen appearance, which is a hallmark of this condition."
},
{
    question: "What type of hypersensitivity reaction is associated with allergic contact eczema?",
    choices: [
        "Type I",
        "Type II",
        "Type III",
        "Type IV"
    ],
    correctAnswer: 3, // The correct answer index (in this case, "Type IV.")
    explanation: "Allergic contact eczema is associated with a Type IV hypersensitivity reaction, also known as delayed-type hypersensitivity. This reaction involves T-cell mediated immune responses to specific allergens, resulting in skin inflammation and dermatitis."
},
{
    question: "Which cytokines are inhibited by the biologic therapy Dupilumab in atopic dermatitis treatment?",
    choices: [
        "IL-2 and IL-10",
        "IL-4 and IL-13",
        "IL-1 and IL-6",
        "TNF-α and IL-12"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "IL-4 and IL-13.")
    explanation: "Dupilumab inhibits IL-4 and IL-13 cytokines, which play a significant role in the pathogenesis of atopic dermatitis by promoting inflammation and allergic responses."
},
{
    question: "What type of eczema is commonly associated with 'coin-shaped' lesions on the arms and legs?",
    choices: [
        "Dyshidrotic eczema",
        "Atopic eczema",
        "Nummular eczema",
        "Stasis dermatitis"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Nummular eczema.")
    explanation: "Nummular eczema is characterized by 'coin-shaped' lesions, which are typically round and scaly patches that can appear on the arms and legs. This type of eczema is often itchy and can be triggered by dry skin or environmental factors."
},
{
    question: "What is the mainstay of treatment for dyshidrotic eczema?",
    choices: [
        "Oral antihistamines",
        "Strong topical corticosteroids",
        "Antibiotics",
        "Calcineurin inhibitors"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Strong topical corticosteroids.")
    explanation: "The mainstay of treatment for dyshidrotic eczema is strong topical corticosteroids. These medications help reduce inflammation, itching, and the formation of blisters associated with this condition."
},
{
    question: "A 25-year-old woman presents with a history of itchy, dry patches on her antecubital fossae that worsen in the winter. She also has a history of asthma. What is the most likely diagnosis?",
    choices: [
        "Contact dermatitis",
        "Nummular eczema",
        "Atopic eczema",
        "Dyshidrotic eczema"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Atopic eczema.")
    explanation: "Atopic eczema (or atopic dermatitis) typically presents with itchy, dry patches on flexural areas like the antecubital fossae and often worsens in dry conditions such as winter. A history of asthma and other atopic conditions is frequently associated with this type of eczema, distinguishing it from other forms like contact dermatitis, nummular eczema, and dyshidrotic eczema."
},
{
    question: "A 6-year-old child with a history of atopic eczema presents with worsening eczema lesions that appear to be infected, with honey-colored crusts on the skin. Which pathogen is the most likely cause of this secondary infection?",
    choices: [
        "Staphylococcus aureus",
        "Candida albicans",
        "Pseudomonas aeruginosa",
        "Streptococcus pyogenes"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Staphylococcus aureus.")
    explanation: "Infected eczema lesions, particularly those with honey-colored crusts, are most commonly caused by Staphylococcus aureus. This pathogen frequently leads to secondary bacterial infections in patients with atopic eczema. Although Streptococcus pyogenes can also cause skin infections, Staphylococcus aureus is the primary culprit in this scenario. Candida albicans is typically associated with fungal infections, and Pseudomonas aeruginosa is more related to infections in moist environments."
},
{
    question: "A 30-year-old woman develops red, itchy patches after wearing nickel earrings. Patch testing confirms a diagnosis of allergic contact eczema. Which of the following immune mechanisms is responsible for this reaction?",
    choices: [
        "IgE-mediated mast cell degranulation",
        "Antibody-antigen complex deposition",
        "T-cell-mediated immune response",
        "Complement activation"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "T-cell-mediated immune response.")
    explanation: "Allergic contact eczema, such as a reaction to nickel, is a type IV hypersensitivity reaction mediated by T-cells. This immune response involves T-cells recognizing the allergen and causing inflammation and skin damage, differing from IgE-mediated mast cell degranulation (type I hypersensitivity), antibody-antigen complex deposition (type III hypersensitivity), and complement activation."
},
{
    question: "A patient presents with a history of chronic scratching of the skin on her lower legs, resulting in thickened, leathery plaques. Which stage of eczema is this patient experiencing?",
    choices: [
        "Acute",
        "Subacute",
        "Chronic",
        "Exudative"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Chronic.")
    explanation: "Chronic eczema is characterized by repeated scratching and rubbing of the skin, leading to thickened, leathery plaques (a condition known as lichenification). This differs from the acute stage, which typically involves red, inflamed skin, and the subacute stage, which involves scaling. The exudative stage is associated with oozing and crusting."
},
{
    question: "A 12-year-old boy presents with dyshidrotic eczema affecting the sides of his fingers. He reports using frequent hand sanitizer. What is the most appropriate treatment to recommend?",
    choices: [
        "Moisturizing creams",
        "Systemic steroids",
        "Oral antibiotics",
        "Topical calcineurin inhibitors"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Moisturizing creams.")
    explanation: "Dyshidrotic eczema often involves dry, irritated skin, and frequent hand sanitizer use can exacerbate this condition. The most appropriate initial treatment is the use of moisturizing creams to restore the skin barrier and reduce irritation. Systemic steroids and topical calcineurin inhibitors are typically reserved for more severe cases, while oral antibiotics are not indicated unless there is a secondary infection."
},
{
    question: "A patient develops an erythematous rash with scaling and oozing after exposure to poison ivy. Which class of medications is most appropriate for treating this condition?",
    choices: [
        "Low-potency topical corticosteroids",
        "High-potency topical corticosteroids",
        "Oral antihistamines",
        "Oral antibiotics"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "High-potency topical corticosteroids.")
    explanation: "Poison ivy exposure typically causes allergic contact dermatitis, presenting with an erythematous, itchy, and sometimes oozing rash. High-potency topical corticosteroids are effective in reducing inflammation and itching. Lower-potency corticosteroids or oral antihistamines may not be strong enough, and oral antibiotics are unnecessary unless there is a secondary infection."
},
{
    question: "A 45-year-old man with venous insufficiency presents with erythematous, scaly patches on his lower legs accompanied by swelling. What is the most appropriate management?",
    choices: [
        "Topical corticosteroids",
        "Oral antibiotics",
        "Compression therapy",
        "Systemic corticosteroids"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Compression therapy.")
    explanation: "Compression therapy is the most appropriate management for patients with venous insufficiency presenting with erythematous, scaly patches and swelling in the lower legs. This therapy helps reduce edema, improves venous return, and can alleviate symptoms associated with venous insufficiency."
},
{
    question: "Which imaging modality is best for visualizing fractures and foreign bodies?",
    choices: [
        "CT scan",
        "Ultrasound",
        "MRI",
        "X-ray"
    ],
    correctAnswer: 3, // The correct answer index (in this case, "X-ray.")
    explanation: "X-ray is the best imaging modality for visualizing fractures and foreign bodies. It provides a quick and effective way to assess bone integrity and identify foreign objects within the body."
},
{
    question: "What does T2-weighted MRI primarily highlight in tissues?",
    choices: [
        "Fat",
        "Water",
        "Bone",
        "Air"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Water.")
    explanation: "T2-weighted MRI primarily highlights water content in tissues. In T2-weighted images, areas with high water content, such as edema or cysts, appear bright, while fat appears darker."
},
{
    question: "Which radiographic views are typically used to evaluate the shoulder?",
    choices: [
        "AP, Mortise, Lateral",
        "AP, Grashey, Scapular Y",
        "AP, Oblique, Sunrise",
        "PA, Clenched Fist, Lateral"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "AP, Grashey, Scapular Y.")
    explanation: "The typical radiographic views used to evaluate the shoulder are the AP (anterior-posterior) view, the Grashey view (which provides a true lateral view of the glenohumeral joint), and the Scapular Y view (which helps assess shoulder dislocations and the scapula)."
},
{
    question: "When should MRI be avoided as a first-line imaging modality?",
    choices: [
        "In patients with metallic implants",
        "When evaluating soft tissue injuries",
        "In cases of suspected occult fractures",
        "When evaluating tendon injuries"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "In patients with metallic implants.")
    explanation: "MRI should be avoided as a first-line imaging modality in patients with metallic implants because the strong magnetic field can interfere with the function of these implants or cause harm. Other imaging modalities, such as X-rays or CT scans, may be more appropriate in these cases."
},
{
    question: "Which CT scan feature allows for better evaluation of joints compared to X-rays?",
    choices: [
        "Ability to detect small fractures",
        "Enhanced soft tissue visualization",
        "3D reconstruction of joint anatomy",
        "Detection of cartilage damage"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "3D reconstruction of joint anatomy.")
    explanation: "The ability to perform 3D reconstruction of joint anatomy using CT scans provides a comprehensive view that enhances the evaluation of joints compared to traditional X-rays. This feature allows for better assessment of the spatial relationships and complex structures within the joint."
},
{
    question: "A 23-year-old male presents with persistent knee pain following a 'pop' while playing sports. Initial X-rays are negative for fractures. Which imaging modality is most appropriate to evaluate for soft tissue injury?",
    choices: [
        "X-ray",
        "CT scan",
        "MRI",
        "Ultrasound"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "MRI.")
    explanation: "MRI is the most appropriate imaging modality to evaluate for soft tissue injuries, such as ligament tears, cartilage damage, and other soft tissue pathologies in the knee. It provides detailed images of both soft tissues and bones, making it superior to X-rays and CT scans for this purpose."
},
{
    question: "A 67-year-old male with chronic knee pain worsening over the last 3 months presents with pain exacerbated by activity and relieved by rest. Which imaging modality should be used first?",
    choices: [
        "CT scan",
        "X-ray",
        "MRI",
        "Ultrasound"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "X-ray.")
    explanation: "X-ray is typically the first imaging modality used in evaluating chronic knee pain, especially to assess for osteoarthritis, bone spurs, or other bony changes. It is a quick and accessible method to rule out any significant bone abnormalities before considering further imaging like MRI."
},
{
    question: "A 52-year-old CrossFit participant presents with left shoulder pain that worsens with overhead activities and at night. Which imaging modality is most appropriate to evaluate for a rotator cuff tear?",
    choices: [
        "X-ray",
        "CT scan",
        "MRI",
        "Ultrasound"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "MRI.")
    explanation: "MRI is the most appropriate imaging modality for evaluating rotator cuff tears, as it provides detailed images of soft tissues, including muscles, tendons, and ligaments. It can help confirm the diagnosis and assess the extent of the injury, making it superior to other imaging modalities like X-ray or CT scan in this context."
},
{
    question: "An 18-year-old female soccer player presents after falling on an outstretched hand. She has tenderness in the anatomical snuffbox. Initial X-rays are normal. What is the next step in imaging?",
    choices: [
        "Place in a thumb spica splint and repeat X-ray in two weeks",
        "Proceed with MRI",
        "Obtain a CT scan",
        "Perform an ultrasound"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Place in a thumb spica splint and repeat X-ray in two weeks.")
    explanation: "In cases of suspected scaphoid fractures with normal initial X-rays, it is common practice to place the patient in a thumb spica splint to immobilize the wrist and thumb and repeat X-rays in two weeks. This allows for potential healing of the fracture and can make the injury more visible on follow-up imaging."
},
{
    question: "A 30-year-old lacrosse player presents with a history of recurrent shoulder dislocations. He reports the latest dislocation self-reduced, and he has tingling down the right arm. X-rays show no fracture. What is the next imaging modality to evaluate shoulder instability?",
    choices: [
        "MRI",
        "Ultrasound",
        "CT scan",
        "X-ray"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "MRI.")
    explanation: "MRI is the next appropriate imaging modality to evaluate shoulder instability, especially in cases of recurrent dislocations. It provides detailed images of soft tissues, including the labrum, ligaments, and muscles, which can help assess any associated injuries or structural abnormalities that may contribute to instability."
},
{
    question: "A collegiate runner presents with anterior shin pain that worsens with activity and has progressed over two months. Initial X-rays are normal. What is the next imaging modality to evaluate for a stress reaction?",
    choices: [
        "MRI",
        "CT scan",
        "X-ray",
        "Bone scan"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "MRI.")
    explanation: "MRI is the next appropriate imaging modality to evaluate for a stress reaction, especially when initial X-rays are normal. It is highly sensitive in detecting bone marrow edema and soft tissue changes associated with stress injuries, making it an effective tool for diagnosis."
},
{
    question: "A 45-year-old man presents with acute knee pain after a traumatic injury. X-rays reveal a fracture, but the alignment of the bones seems complex. Which imaging modality would best evaluate this fracture further?",
    choices: [
        "MRI",
        "X-ray",
        "CT scan",
        "Ultrasound"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "CT scan.")
    explanation: "A CT scan is the best imaging modality to further evaluate complex fractures. It provides detailed cross-sectional images of the bone and can give clearer information about the alignment and extent of the fracture, making it particularly useful for complex or intra-articular fractures."
},
{
    question: "What is the typical resting membrane potential (Vrest) of a neuron?",
    choices: [
        "+40 mV",
        "0 mV",
        "-70 mV",
        "-100 mV"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "-70 mV.")
    explanation: "The typical resting membrane potential (Vrest) of a neuron is approximately -70 mV. This value indicates that the inside of the neuron is more negative compared to the outside, which is crucial for the generation and propagation of action potentials."
},
{
    question: "What ion is most responsible for maintaining the resting membrane potential in most cells?",
    choices: [
        "Sodium (Na⁺)",
        "Potassium (K⁺)",
        "Chloride (Cl⁻)",
        "Calcium (Ca²⁺)"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Potassium (K⁺).")
    explanation: "Potassium (K⁺) is the ion most responsible for maintaining the resting membrane potential in most cells. The higher permeability of the cell membrane to K⁺ ions compared to Na⁺ ions at rest leads to a net negative charge inside the cell, establishing the resting membrane potential."
},
{
    question: "Which equation is used to calculate the equilibrium potential of an ion?",
    choices: [
        "Goldman-Hodgkin-Katz equation",
        "Michaelis-Menten equation",
        "Nernst equation",
        "Henderson-Hasselbalch equation"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "Nernst equation.")
    explanation: "The Nernst equation is used to calculate the equilibrium potential of an ion. It allows for the determination of the electrical potential difference across a membrane that exactly balances the concentration gradient for that ion."
},
{
    question: "During an action potential, which ion influx causes depolarization of the neuron?",
    choices: [
        "Potassium (K⁺)",
        "Sodium (Na⁺)",
        "Chloride (Cl⁻)",
        "Calcium (Ca²⁺)"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Sodium (Na⁺).")
    explanation: "During an action potential, the influx of sodium ions (Na⁺) causes depolarization of the neuron. This rapid influx of Na⁺ ions results in the membrane potential becoming more positive, which is a key characteristic of the depolarization phase of the action potential."
},
{
    question: "What happens to the membrane potential during hyperkalemia?",
    choices: [
        "It becomes more negative",
        "It becomes more positive",
        "It remains the same",
        "It fluctuates randomly"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "It becomes more positive.")
    explanation: "During hyperkalemia, the concentration of potassium ions (K⁺) outside the cell increases, which reduces the concentration gradient for K⁺. As a result, the resting membrane potential becomes more positive (depolarized), making the neuron more excitable."
},
{
    question: "A patient presents with muscle weakness, hyporeflexia, and ECG changes. Lab results show hypokalemia. What effect would this have on the resting membrane potential of muscle cells?",
    choices: [
        "It will become more positive",
        "It will remain unchanged",
        "It will become more negative",
        "It will fluctuate without a pattern"
    ],
    correctAnswer: 2, // The correct answer index (in this case, "It will become more negative.")
    explanation: "In hypokalemia, the decreased concentration of potassium ions (K⁺) outside the cell increases the concentration gradient for K⁺, leading to a greater efflux of K⁺ from the cell. This results in hyperpolarization, causing the resting membrane potential to become more negative."
},
{
    question: "A 35-year-old male presents with muscle cramps and weakness after excessive diuretic use. Blood tests show low potassium levels. Which of the following changes is most likely to be seen in his muscle cells?",
    choices: [
        "Increased excitability due to depolarization",
        "Decreased excitability due to hyperpolarization",
        "Normal excitability",
        "Increased excitability due to hyperpolarization"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Decreased excitability due to hyperpolarization.")
    explanation: "In hypokalemia, the decreased extracellular potassium concentration leads to increased efflux of potassium from muscle cells, causing hyperpolarization. This hyperpolarization results in decreased excitability of the muscle cells, making it harder for them to depolarize and contract."
},
{
    question: "A 50-year-old female presents with severe hyperkalemia secondary to kidney failure. What would you expect to happen to the excitability of her neurons?",
    choices: [
        "Increased excitability",
        "Decreased excitability",
        "No change in excitability",
        "Fluctuating excitability"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Increased excitability.")
    explanation: "In hyperkalemia, the increased concentration of potassium ions (K⁺) outside the neuron reduces the potassium gradient across the membrane, leading to a depolarized resting membrane potential. This depolarization increases the excitability of neurons, making them more likely to fire action potentials."
},
{
    question: "A patient with Addison’s disease presents with hyperkalemia. How would this affect the likelihood of his cardiac myocytes firing an action potential?",
    choices: [
        "Less likely due to hyperpolarization",
        "Less likely due to depolarization block",
        "More likely due to hyperpolarization",
        "More likely due to depolarization block"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Less likely due to depolarization block.")
    explanation: "In hyperkalemia, the elevated potassium levels outside the cardiac myocytes can lead to a condition known as depolarization block. This occurs because the resting membrane potential becomes more positive, and the cardiac myocytes may remain in a partially depolarized state, making it difficult for them to reach the threshold for firing an action potential. As a result, the likelihood of action potentials firing decreases."
},
{
    question: "A 45-year-old male presents with muscle weakness and arrhythmias. Lab results show hyperkalemia. What would you expect to see in his cardiac myocytes’ resting membrane potential?",
    choices: [
        "It will become more negative",
        "It will become more positive",
        "It will stay the same",
        "It will fluctuate unpredictably"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "It will become more positive.")
    explanation: "In hyperkalemia, the increased extracellular potassium concentration reduces the potassium gradient across the cardiac myocyte membrane, causing the resting membrane potential to become more positive (depolarized). This can lead to increased excitability of the myocytes and potentially contribute to arrhythmias."
},
{
    question: "A patient suffers from a genetic disorder that affects voltage-gated sodium channels, leading to prolonged depolarization. Which phase of the action potential would be most affected?",
    choices: [
        "Depolarization",
        "Repolarization",
        "Resting potential",
        "Hyperpolarization"
    ],
    correctAnswer: 1, // The correct answer index (in this case, "Repolarization.")
    explanation: "If voltage-gated sodium channels are affected, leading to prolonged depolarization, it would primarily impact the repolarization phase of the action potential. Normally, after depolarization, sodium channels inactivate and potassium channels open to restore the resting membrane potential. Prolonged depolarization suggests that repolarization is delayed due to persistent sodium channel activity."
},
{
    question: "In a patient with a severe burn injury, changes in potassium levels are suspected to cause hyperpolarization of cells. Which of the following conditions is most likely responsible for this?",
    choices: [
        "Hypokalemia",
        "Hyperkalemia",
        "Hypernatremia",
        "Hyponatremia"
    ],
    correctAnswer: 0, // The correct answer index (in this case, "Hypokalemia.")
    explanation: "Hypokalemia refers to low potassium levels in the blood, which increases the resting membrane potential (makes it more negative) and can lead to hyperpolarization of cells. This occurs because the reduced extracellular potassium concentration enhances the potassium gradient, causing more potassium to exit the cell and thus making the inside of the cell more negative."
}
];

let quizData = [];
let currentQuestionIndex = 0;
let score = 0;
let isExplanationShown = false;

// Function to shuffle the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to select 60 random questions
function selectRandomQuestions() {
    shuffle(allQuizData); // Shuffle the full question list
    quizData = allQuizData.slice(0, 60); // Select the first 60 questions
}

// Load random questions when the app starts
selectRandomQuestions();

const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const explanationContainer = document.getElementById("explanation");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const scoreContainer = document.getElementById("score-container");

// Load the first question
loadQuestion();

function loadQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];

    const quizTitle = document.querySelector('h1');
    quizTitle.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    
    questionContainer.textContent = currentQuestion.question;

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => selectAnswer(index));
        choicesContainer.appendChild(button);
    });

    if (currentQuestionIndex > 0) {
        prevButton.classList.remove("hidden");
    } else {
        prevButton.classList.add("hidden");
    }

    if (isExplanationShown) {
        nextButton.classList.remove("hidden");
    }
}

function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('modal-text').textContent = "Correct! " + currentQuestion.explanation;
        document.body.style.backgroundColor = "green";
    } else {
        document.getElementById('modal-text').textContent = "Incorrect. " + currentQuestion.explanation;
        document.body.style.backgroundColor = "red";
    }

    const modal = document.getElementById("explanation-modal");
    modal.style.display = "block";

    isExplanationShown = true;
    nextButton.classList.remove("hidden");

    const buttons = choicesContainer.querySelectorAll("button");
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === currentQuestion.correctAnswer) {
            button.style.backgroundColor = "green";
        } else if (index === selectedIndex) {
            button.style.backgroundColor = "red";
        } else {
            button.style.backgroundColor = "gray";
        }
    });
}

document.getElementById("close-modal").onclick = function() {
    document.getElementById("explanation-modal").style.display = "none";
};

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
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
    explanationContainer.textContent = "";
    nextButton.classList.add("hidden");
    prevButton.classList.add("hidden");
    choicesContainer.innerHTML = "";
    document.body.style.backgroundColor = "";
    document.getElementById("explanation-modal").style.display = "none";
}

nextButton.addEventListener("click", () => {
    if (isExplanationShown) {
        isExplanationShown = false;
        nextQuestion();
    }
});

prevButton.addEventListener("click", () => {
    prevQuestion();
});
