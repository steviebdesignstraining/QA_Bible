"use client"

import { useState, useEffect } from "react"

export default function Page() {
  const [activeLetter, setActiveLetter] = useState<string>("A")

  const categories = {
    "A": {
      title: "AI/ML Basics",
      questions: [
        { q: "What is AI testing?", a: "AI testing validates artificial intelligence systems for accuracy, reliability, and ethical behavior." },
        { q: "What is machine learning testing?", a: "ML testing validates machine learning models for performance, bias, and robustness." },
        { q: "What is deep learning testing?", a: "Deep learning testing validates neural networks and complex AI architectures." },
        { q: "What is model validation?", a: "Model validation ensures AI models perform correctly on new data." },
        { q: "What is training data validation?", a: "Training data validation ensures data quality and representativeness." },
      ]
    },
    "B": {
      title: "Bias & Fairness",
      questions: [
        { q: "What is data bias testing?", a: "Data bias testing identifies unfair or discriminatory patterns in training data." },
        { q: "What is algorithmic bias?", a: "Algorithmic bias occurs when AI systems produce unfair outcomes." },
        { q: "What is fairness testing?", a: "Fairness testing ensures AI systems treat different groups equitably." },
        { q: "What is AI ethics?", a: "AI ethics ensures responsible and beneficial AI development." },
        { q: "What is AI safety?", a: "AI safety prevents harmful AI behaviors and outcomes." },
        { q: "What is AI alignment?", a: "AI alignment ensures AI goals match human values." },
        { q: "What is value alignment?", a: "Value alignment teaches AI human ethical principles." },
      ]
    },
    "C": {
      title: "Security & Adversarial",
      questions: [
        { q: "What is model robustness?", a: "Model robustness is the ability to maintain performance under varying conditions." },
        { q: "What is adversarial testing?", a: "Adversarial testing checks AI resistance to malicious inputs designed to fool the system." },
        { q: "What is adversarial attack?", a: "Adversarial attack uses carefully crafted inputs to cause AI misclassification." },
        { q: "What is evasion attack?", a: "Evasion attack modifies inputs to avoid detection by AI systems." },
        { q: "What is poisoning attack?", a: "Poisoning attack corrupts training data to compromise model performance." },
        { q: "What is model inversion?", a: "Model inversion reconstructs sensitive training data from model outputs." },
        { q: "What is membership inference?", a: "Membership inference determines if specific data was used in training." },
      ]
    },
    "D": {
      title: "Performance & Metrics",
      questions: [
        { q: "What is performance testing for AI?", a: "AI performance testing measures speed, accuracy, and resource usage." },
        { q: "What is accuracy testing?", a: "Accuracy testing measures how often AI predictions are correct." },
        { q: "What is precision testing?", a: "Precision testing measures positive prediction accuracy." },
        { q: "What is recall testing?", a: "Recall testing measures ability to find all relevant instances." },
        { q: "What is F1 score?", a: "F1 score balances precision and recall in a single metric." },
        { q: "What is confusion matrix?", a: "Confusion matrix shows true/false positives and negatives." },
        { q: "What is ROC curve?", a: "ROC curve plots true positive rate vs false positive rate." },
        { q: "What is AUC?", a: "AUC measures area under ROC curve for classification performance." },
      ]
    },
    "E": {
      title: "Model Validation",
      questions: [
        { q: "What is overfitting?", a: "Overfitting occurs when model performs well on training data but poorly on new data." },
        { q: "What is underfitting?", a: "Underfitting occurs when model performs poorly on both training and new data." },
        { q: "What is cross-validation?", a: "Cross-validation assesses model performance on different data subsets." },
        { q: "What is k-fold cross-validation?", a: "K-fold cross-validation divides data into k subsets for validation." },
        { q: "What is holdout validation?", a: "Holdout validation uses separate training and testing datasets." },
        { q: "What is data drift?", a: "Data drift occurs when input data distribution changes over time." },
        { q: "What is concept drift?", a: "Concept drift occurs when relationship between inputs and outputs changes." },
        { q: "What is model decay?", a: "Model decay is performance degradation over time due to changing conditions." },
      ]
    },
    "F": {
      title: "Deployment & Monitoring",
      questions: [
        { q: "What is model monitoring?", a: "Model monitoring tracks AI performance and detects issues in production." },
        { q: "What is A/B testing for AI?", a: "A/B testing compares different AI models or versions." },
        { q: "What is shadow testing?", a: "Shadow testing runs new AI models alongside production without affecting users." },
        { q: "What is canary testing?", a: "Canary testing deploys new AI to small user subset first." },
        { q: "What is gradual rollout?", a: "Gradual rollout slowly increases traffic to new AI model." },
        { q: "What is model versioning?", a: "Model versioning tracks different model iterations and changes." },
        { q: "What is model registry?", a: "Model registry stores and manages different model versions." },
        { q: "What is model serving?", a: "Model serving deploys AI models for inference in production." },
      ]
    },
    "G": {
      title: "Privacy & Federated",
      questions: [
        { q: "What is edge AI testing?", a: "Edge AI testing validates models running on edge devices." },
        { q: "What is federated learning?", a: "Federated learning trains models across decentralized devices." },
        { q: "What is differential privacy?", a: "Differential privacy protects individual data privacy in training." },
        { q: "What is homomorphic encryption?", a: "Homomorphic encryption allows computation on encrypted data." },
        { q: "What is secure multi-party computation?", a: "Secure multi-party computation allows joint computation without revealing inputs." },
        { q: "What is federated testing?", a: "Federated testing validates models trained with federated learning." },
      ]
    },
    "H": {
      title: "Data & Augmentation",
      questions: [
        { q: "What is synthetic data?", a: "Synthetic data is artificially generated data for training and testing." },
        { q: "What is data augmentation?", a: "Data augmentation creates variations of training data." },
        { q: "What is generative adversarial network?", a: "GAN generates realistic data using competing neural networks." },
        { q: "What is variational autoencoder?", a: "VAE learns data distribution for generation and compression." },
      ]
    },
    "I": {
      title: "Domain-Specific",
      questions: [
        { q: "What is computer vision testing?", a: "Computer vision testing validates image recognition and processing." },
        { q: "What is natural language processing testing?", a: "NLP testing validates text understanding and generation." },
        { q: "What is speech recognition testing?", a: "Speech recognition testing validates audio-to-text conversion." },
        { q: "What is recommendation system testing?", a: "Recommendation system testing validates personalized suggestions." },
        { q: "What is anomaly detection testing?", a: "Anomaly detection testing validates identification of unusual patterns." },
        { q: "What is predictive analytics testing?", a: "Predictive analytics testing validates forecasting accuracy." },
        { q: "What is time series testing?", a: "Time series testing validates temporal data predictions." },
      ]
    },
    "L": {
      title: "Learning Methods",
      questions: [
        { q: "What is reinforcement learning testing?", a: "Reinforcement learning testing validates decision-making agents." },
        { q: "What is multi-agent system testing?", a: "Multi-agent system testing validates interacting AI agents." },
        { q: "What is swarm intelligence testing?", a: "Swarm intelligence testing validates collective AI behavior." },
        { q: "What is evolutionary algorithm testing?", a: "Evolutionary algorithm testing validates optimization techniques." },
        { q: "What is genetic algorithm testing?", a: "Genetic algorithm testing validates population-based optimization." },
      ]
    },
    "M": {
      title: "Model Architecture",
      questions: [
        { q: "What is neural network testing?", a: "Neural network testing validates artificial neural architectures." },
        { q: "What is convolutional neural network testing?", a: "CNN testing validates image processing networks." },
        { q: "What is recurrent neural network testing?", a: "RNN testing validates sequential data processing." },
        { q: "What is transformer testing?", a: "Transformer testing validates attention-based architectures." },
        { q: "What is large language model testing?", a: "LLM testing validates massive language models like GPT." },
      ]
    },
    "N": {
      title: "Learning Techniques",
      questions: [
        { q: "What is prompt engineering?", a: "Prompt engineering designs inputs to get desired AI outputs." },
        { q: "What is few-shot learning?", a: "Few-shot learning adapts models with minimal examples." },
        { q: "What is zero-shot learning?", a: "Zero-shot learning performs tasks without specific training." },
        { q: "What is transfer learning?", a: "Transfer learning applies knowledge from one task to another." },
        { q: "What is meta-learning?", a: "Meta-learning enables learning how to learn quickly." },
        { q: "What is continual learning?", a: "Continual learning adapts models to new data over time." },
        { q: "What is catastrophic forgetting?", a: "Catastrophic forgetting loses previously learned knowledge." },
        { q: "What is elastic weight consolidation?", a: "EWC prevents forgetting by protecting important weights." },
        { q: "What is progressive neural networks?", a: "Progressive neural networks add capacity for new tasks." },
      ]
    },
    "O": {
      title: "Optimization",
      questions: [
        { q: "What is neural architecture search?", a: "NAS automatically finds optimal neural network architectures." },
        { q: "What is AutoML?", a: "AutoML automates machine learning pipeline creation." },
        { q: "What is hyperparameter tuning?", a: "Hyperparameter tuning optimizes model configuration parameters." },
        { q: "What is grid search?", a: "Grid search exhaustively tries parameter combinations." },
        { q: "What is random search?", a: "Random search randomly samples parameter space." },
        { q: "What is Bayesian optimization?", a: "Bayesian optimization uses probability to find optimal parameters." },
        { q: "What is gradient-based optimization?", a: "Gradient-based optimization uses derivatives to find optima." },
        { q: "What is stochastic gradient descent?", a: "SGD optimizes using noisy gradient estimates." },
        { q: "What is Adam optimizer?", a: "Adam combines momentum and RMSProp for adaptive learning rates." },
        { q: "What is learning rate scheduling?", a: "Learning rate scheduling adjusts learning rate during training." },
        { q: "What is early stopping?", a: "Early stopping halts training when validation performance degrades." },
        { q: "What is checkpointing?", a: "Checkpointing saves model state during training." },
      ]
    },
    "P": {
      title: "Production & Scaling",
      questions: [
        { q: "What is model compression?", a: "Model compression reduces model size for deployment." },
        { q: "What is quantization?", a: "Quantization reduces numerical precision for efficiency." },
        { q: "What is pruning?", a: "Pruning removes unnecessary model parameters." },
        { q: "What is knowledge distillation?", a: "Knowledge distillation transfers knowledge from large to small models." },
      ]
    },
    "R": {
      title: "Interpretability",
      questions: [
        { q: "What is explainability testing?", a: "Explainability testing verifies AI decisions can be understood by humans." },
        { q: "What is interpretability?", a: "Interpretability is the ability to understand AI decision-making processes." },
        { q: "What is model interpretability?", a: "Model interpretability explains AI decision-making." },
        { q: "What is SHAP?", a: "SHAP explains predictions using Shapley additive explanations." },
        { q: "What is LIME?", a: "LIME explains predictions using local approximations." },
        { q: "What is feature importance?", a: "Feature importance ranks input features by predictive power." },
        { q: "What is partial dependence plots?", a: "PDP shows how predictions change with feature values." },
        { q: "What is individual conditional expectation?", a: "ICE shows prediction changes for individual instances." },
        { q: "What is counterfactual explanations?", a: "Counterfactual explanations show what changes would alter predictions." },
      ]
    },
    "S": {
      title: "Standards & Governance",
      questions: [
        { q: "What is model cards?", a: "Model cards document AI model capabilities and limitations." },
        { q: "What is datasheets for datasets?", a: "Datasheets document dataset creation and characteristics." },
        { q: "What is AI governance?", a: "AI governance establishes policies for responsible AI use." },
        { q: "What is AI regulation?", a: "AI regulation creates legal frameworks for AI development." },
        { q: "What is EU AI Act?", a: "EU AI Act regulates AI systems by risk level." },
        { q: "What is AI liability?", a: "AI liability determines responsibility for AI-caused harm." },
        { q: "What is AI insurance?", a: "AI insurance covers risks associated with AI deployment." },
        { q: "What is AI auditing?", a: "AI auditing reviews AI systems for compliance and safety." },
        { q: "What is AI certification?", a: "AI certification verifies AI systems meet standards." },
      ]
    },
    "T": {
      title: "Tools & Frameworks",
      questions: [
        { q: "What is AI testing frameworks?", a: "AI testing frameworks provide tools for comprehensive AI validation." },
        { q: "What is adversarial robustness toolbox?", a: "ART provides tools for adversarial attack generation and defense." },
        { q: "What is CleverHans?", a: "CleverHans is a library for adversarial examples." },
        { q: "What is Foolbox?", a: "Foolbox is a Python toolbox for adversarial attacks." },
        { q: "What is AI fairness 360?", a: "AI Fairness 360 detects and mitigates unfairness in AI." },
        { q: "What is What-If Tool?", a: "What-If Tool analyzes ML models with interactive visualizations." },
        { q: "What is TensorBoard?", a: "TensorBoard visualizes TensorFlow model training and performance." },
        { q: "What is Weights & Biases?", a: "Weights & Biases tracks experiments and model performance." },
        { q: "What is MLflow?", a: "MLflow manages ML lifecycle including experimentation and deployment." },
        { q: "What is Kubeflow?", a: "Kubeflow runs ML workflows on Kubernetes." },
        { q: "What is SageMaker?", a: "SageMaker is AWS platform for building, training, and deploying ML models." },
        { q: "What is Vertex AI?", a: "Vertex AI is Google Cloud unified ML platform." },
        { q: "What is Azure Machine Learning?", a: "Azure ML provides cloud-based ML model development." },
        { q: "What is the future of AI testing?", a: "Advanced adversarial testing, automated fairness checking, and AI-driven test generation." },
      ]
    }
  }

  const scrollToCategory = (letter: string) => {
    setActiveLetter(letter)
    const element = document.getElementById(`category-${letter}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const categoryElements = Object.keys(categories).map(letter =>
        document.getElementById(`category-${letter}`)
      ).filter(Boolean)

      for (let i = categoryElements.length - 1; i >= 0; i--) {
        const element = categoryElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveLetter(element.id.replace('category-', ''))
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Testing Q&A</h1>
      <p className="mb-4">
        Comprehensive interview questions and answers for AI/ML testing roles, covering model validation, bias testing, and ethical AI.
      </p>

      {/* A-Z Navigation */}
      <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 border-b border-gray-200 dark:border-gray-700 mb-6 py-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(categories).map(letter => (
            <button
              key={letter}
              onClick={() => scrollToCategory(letter)}
              className={`px-3 py-1 rounded border ${
                activeLetter === letter
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-8">
        {Object.entries(categories).map(([letter, category]) => (
          <div key={letter} id={`category-${letter}`} className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              {letter}: {category.title}
            </h2>
            <div className="space-y-4">
              {category.questions.map((item, index) => (
                <div key={index} className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Q: {item.q}</h3>
                  <p className="text-gray-700 dark:text-gray-300">A: {item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  )
}