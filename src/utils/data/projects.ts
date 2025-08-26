import { v4 as uuid } from "uuid";
import { Project } from "@/utils/types/project";
import * as images from "@/utils/data/images";
import { tags } from "@/utils/data/tags";

const projects: Project[] = [
  /* Front-end */
  {
    id: uuid(),
    img: images.architechtureImg,
    title: "BR Architects",
    description:
      "Discover the innovative world of BR Architects – blending creativity, sustainability, and modern design. Explore our portfolio of architectural masterpieces and learn how we shape spaces that inspire.",
    areas: [tags.frontendTag],
    skills: [
      tags.dockerTag,
      tags.gitTag,
      tags.githubTag,
      tags.nextTag,
      tags.reactTag,
      tags.tailwindTag,
      tags.typeScriptTag,
    ],
    repoLink: "https://github.com/zolppy/br-architects",
    demoLink: "https://br-architects-zol.vercel.app",
  },
  {
    id: uuid(),
    img: images.fashionImg,
    title: "Fashion Blog",
    description:
      "Discover the latest fashion trends, style tips, and inspiration from the world of fashion. Your go-to blog for staying stylish and up-to-date with the industry's hottest looks.",
    areas: [tags.frontendTag],
    skills: [
      tags.dockerTag,
      tags.gitTag,
      tags.githubTag,
      tags.framerMotionTag,
      tags.nextTag,
      tags.reactIconsTag,
      tags.reactTag,
      tags.tailwindTag,
      tags.typeScriptTag,
    ],
    repoLink: "https://github.com/zolppy/fashion-blog",
    demoLink: "https://fashion-blog-zol.vercel.app/",
  },
  {
    id: uuid(),
    img: images.interiorDesignImg,
    title: "Interior Design",
    description:
      "Explore elegant and modern interior design solutions tailored to your style. Browse our portfolio, discover inspiration, and transform your space with professional design ideas.",
    areas: [tags.frontendTag],
    skills: [
      tags.dockerTag,
      tags.framerMotionTag,
      tags.gitTag,
      tags.githubTag,
      tags.nextTag,
      tags.reactIconsTag,
      tags.reactTag,
      tags.reactTestingLibraryTag,
      tags.tailwindTag,
      tags.typeScriptTag,
    ],
    repoLink: "https://github.com/zolppy/interior-design",
    demoLink: "https://interior-design-zol.vercel.app/",
  },
  {
    id: uuid(),
    img: images.pizzaImg,
    title: "Thin Crust Pizza",
    description:
      "Discover the art of thin crust pizza — crispy, flavorful, and made with fresh ingredients. Explore recipes, tips, and inspiration for crafting the perfect thin crust pizza at home.",
    areas: [tags.frontendTag],
    skills: [
      tags.dockerTag,
      tags.framerMotionTag,
      tags.gitTag,
      tags.githubTag,
      tags.nextTag,
      tags.reactIconsTag,
      tags.reactTag,
      tags.tailwindTag,
      tags.typeScriptTag,
    ],
    repoLink: "https://github.com/zolppy/thin-crust-pizza",
    demoLink: "https://thin-crust-pizza.vercel.app/",
  },
  {
    id: uuid(),
    img: images.projectShowcaseImg,
    title: "Project Showcase",
    description:
      "Gabriel Cavalcante's main side projects, developed by using cutting-edge technologies, good software achitecures and good coding practices.",
    areas: [tags.frontendTag],
    skills: [
      tags.dockerTag,
      tags.gitTag,
      tags.githubTag,
      tags.nextTag,
      tags.reactIconsTag,
      tags.reactTag,
      tags.tailwindTag,
      tags.typeScriptTag,
    ],
    repoLink: "https://github.com/zolppy/projects",
    demoLink: "https://projects-zol.vercel.app",
  },
  {
    id: uuid(),
    img: images.travelImg,
    title: "Travel Agency",
    description:
      "Discover your next adventure with Travel Agency - explore top destinations, customized vacation packages, and hassle-free booking. Plan your dream trip today!",
    areas: [tags.frontendTag],
    skills: [
      tags.dockerTag,
      tags.gitTag,
      tags.githubTag,
      tags.nextTag,
      tags.reactIconsTag,
      tags.reactTag,
      tags.tailwindTag,
      tags.typeScriptTag,
    ],
    repoLink: "https://github.com/zolppy/travel-agency",
    demoLink: "https://travel-agency-zol.vercel.app/",
  },
  {
    id: uuid(),
    img: images.wizardImg,
    title: "Wizard Register",
    description:
      "Register as a mage in the kingdom of Eldoria! Join the Royal Archives to unlock exclusive mystical powers, quests, and resources.",
    areas: [tags.frontendTag],
    skills: [
      tags.dockerTag,
      tags.gitTag,
      tags.githubTag,
      tags.nextTag,
      tags.reactHookFormTag,
      tags.reactTag,
      tags.reactTestingLibraryTag,
      tags.tailwindTag,
      tags.typeScriptTag,
    ],
    repoLink: "https://github.com/zolppy/wizard-register",
    demoLink: "https://wizard-register.vercel.app/",
  },

  /* Artificial Intelligence */
  {
    id: uuid(),
    img: images.catsAndDogsClassifierImg,
    title: "Cats and Dogs Classifier",
    description:
      "Implementation of two models using a convolutional neural network (CNN) to classify images into two distinct classes (dogs and cats). Transfer learning is performed between the first and second models to improve results, which are measured using performance metrics to assess training progress.",
    areas: [tags.artificialIntelligenceTag],
    skills: [tags.matplotlibTag, tags.pythonTag, tags.tensorFlowTag],
    repoLink: "https://github.com/zolppy/cats-and-dogs-classifier",
  },
  {
    id: uuid(),
    img: images.celebrityFaceRecognitionImg,
    title: "CelebrityFaceRecognition",
    description:
      "Celebrity face recognition system built using deep learning. It leverages a Convolutional Neural Network to identify individuals from a dataset of celebrity images. The system first pre-processes the image data, trains the model, and then uses a Haar Cascade classifier to detect faces in new images.",
    areas: [tags.artificialIntelligenceTag],
    skills: [
      tags.gitTag,
      tags.githubTag,
      tags.kagglehubTag,
      tags.matplotlibTag,
      tags.numpyTag,
      tags.openCvTag,
      tags.pythonTag,
      tags.scikitLearnTag,
      tags.tensorFlowTag,
    ],
    repoLink: "https://github.com/zolppy/celebrity-face-recognition",
  },
  {
    id: uuid(),
    img: images.imageDimensionalityReductionImg,
    title: "Image Dimensionality Reduction",
    description:
      "A Python project for converting RGB images to grayscale and binary formats. Uses luminance calculation for grayscale conversion and thresholding for binary conversion. Includes functions to save the processed images. Built with NumPy and PIL (Python Imaging Library).",
    areas: [tags.artificialIntelligenceTag],
    skills: [
      tags.gitTag,
      tags.githubTag,
      tags.numpyTag,
      tags.pillowTag,
      tags.pythonTag,
    ],
    repoLink:
      "https://github.com/zolppy/image-dimensionality-reduction/tree/main",
  },
  {
    id: uuid(),
    img: images.irisClassifierImg,
    title: "Iris Classifier",
    description:
      "This project demonstrates the use of a Multi-layer Perceptron (MLP) classifier on the Iris dataset. It includes data preprocessing, hyperparameter tuning with GridSearchCV, model evaluation using metrics like accuracy, precision, recall, F-score, and specificity, and visualization of ROC curves for multi-class classification.",
    areas: [tags.artificialIntelligenceTag],
    skills: [tags.pythonTag, tags.scikitLearnTag, tags.matplotlibTag],
    repoLink: "https://github.com/zolppy/iris-classifier",
  },
  {
    id: uuid(),
    img: images.objectDetectionWithYoloImg,
    title: "Object Detection With YOLO",
    description:
      "This project demonstrates how to train a YOLOv8 object detection model to detect various types of fruits. The process involves loading a pre-trained YOLOv8 model, training it on a custom dataset of fruits, evaluating its performance, and running inference on sample images.",
    areas: [tags.artificialIntelligenceTag],
    skills: [
      tags.gitTag,
      tags.githubTag,
      tags.matplotlibTag,
      tags.numpyTag,
      tags.pandasTag,
      tags.pythonTag,
      tags.openCvTag,
    ],
    repoLink: "https://github.com/zolppy/object-detection-with-yolo",
  },
  {
    id: uuid(),
    img: images.omnidocImg,
    title: "OmniDoc",
    description:
      "A RAG chatbot built with LangChain, ChromaDB, and LLM of Groq that processes PDF documents for context-aware question answering. Features document ingestion, text splitting, vector storage, and conversational memory with a Streamlit web interface.",
    areas: [tags.artificialIntelligenceTag],
    skills: [
      tags.pythonTag,
      tags.gitTag,
      tags.chromaDbTag,
      tags.githubTag,
      tags.streamlitTag,
      tags.langchainTag,
    ],
    repoLink: "https://github.com/zolppy/omnidoc",
  },
  {
    id: uuid(),
    img: images.recommendationSystemImg,
    title: "Recommendation System",
    description:
      "This project demonstrates the creation of a content-based image recommendation system. It leverages a pre-trained VGG16 deep learning model to extract meaningful feature vectors from images. These features are then compared using cosine similarity to identify and recommend visually similar images.",
    areas: [tags.artificialIntelligenceTag],
    skills: [
      tags.gitTag,
      tags.githubTag,
      tags.matplotlibTag,
      tags.numpyTag,
      tags.pythonTag,
      tags.scikitLearnTag,
      tags.tensorFlowTag,
    ],
    repoLink: "https://github.com/zolppy/recommendation-system",
  },
  {
    id: uuid(),
    img: images.virtualAssistantImg,
    title: "Virtual Assistant",
    description:
      "A simple command-line voice assistant built with Python that listens for spoken commands. It can perform tasks like searching YouTube and Wikipedia, playing local music files, telling jokes, and getting the current time, using Google's Speech-to-Text and Text-to-Speech APIs for interaction.",
    areas: [tags.artificialIntelligenceTag],
    skills: [tags.gitTag, tags.githubTag, tags.pythonTag],
    repoLink: "https://github.com/zolppy/virtual-assistant",
  },
];

export { projects };
