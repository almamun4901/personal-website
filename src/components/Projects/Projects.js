import React from 'react'

const Projects = () => {
  const professionalWork = [
    {
      title: "Research at LISP",
      description: "A Graph Neural Network (GNN)-based algorithm that integrates phonetics into large language models (LLMs) to improve low-resource language processing. By optimizing the model’s architecture for scalability, it enhances linguistic representation and computational efficiency, ensuring robust performance across diverse languages. The approach refines phonetic embeddings to strengthen language comprehension, enabling LLMs to handle complex linguistic structures with greater accuracy and adaptability.",
      tags: ["Python", "LLM", "Graphic Design"],
      image: `${process.env.PUBLIC_URL}/images/work/machine_nb.png`
    },
    {
      title: "Research at Keller Lab Group", 
      description: "A research project decision support tools and data products within the solar industry to assist homeowners in decarbonization. By applying robust decision-making principles, it develops an XLRM framework to design an informational website portal, ensuring accessible and data-driven guidance for sustainable energy choices.",
      tags: ["Python", "Numpy", "HTML", "React", "Interaction Design"],
      image: `${process.env.PUBLIC_URL}/images/work/girl.jpeg`
    },
    {
      title: "Amazon Review Binary Classification Model", 
      description: "This project focuses on developing and optimizing machine learning models, including TF-IDF, logistic regression, SVM, and decision trees, for binary classification of Amazon reviews, achieving an accuracy exceeding 94%. It incorporates large language models (Mistral-7B) with zero-, one-, and few-shot prompting to analyze the impact of prompt design and class definitions. Through detailed error analysis, the project evaluates model behavior under various conditions, refining natural language processing techniques and enhancing machine learning workflows through hands-on experimentation.",
      tags: ["Python", "Scikit-learn", "Mistral-7B", "Logistic Regression"],
      image: `${process.env.PUBLIC_URL}/images/work/deepmind.jpg`
    },
    {
      title: "AstroSphere XR", 
      description: "An augmented and virtual reality (AR-VR) planet model using Unity C# and Maya to create an immersive and interactive solar system experience. The application enhances space education by providing an engaging, hands-on learning environment that allows users to explore celestial bodies and planetary dynamics in real time.",
      tags: ["Unity C#", "Meta XR Toolkits"],
      image: `${process.env.PUBLIC_URL}/images/work/planets.jpg`
    },
    {
      title: "Tiny Search Engine", 
      description: "A parallelized web crawler to efficiently store summaries of 10,000 interest pages and index them for retrieval within 20 milliseconds. A fuzzy querier was designed using a Hypertext Induced Topic Search (HITS) algorithm, incorporating a related page feature to enhance search relevance and user experience.",
      tags: ["C", "Website Design", "Interaction Design"],
      image: `${process.env.PUBLIC_URL}/images/work/minimalistic_nb.png`
    },
    {
      title: "Trigram Part of Speech (POS) Tagging Model", 
      description: "A trained Hidden Markov Model on the Brown corpus, consisting of 1 million words from 500 samples, and utilized the Viterbi decoding algorithm to achieve 96% accuracy in part-of-speech tagging when tested on files exceeding 500,000 words. Additionally, a Huffman file compression algorithm was implemented to optimize data transfer and storage, enhancing the efficiency of model training and deployment.",
      tags: ["Java"],
      image: `${process.env.PUBLIC_URL}/images/work/web.jpeg`
    }
  ]

  if (!professionalWork.length) return null

  return (
    <section id='work' className='py-24'>
      <div className='w-full px-4 mx-auto max-w-7xl'>
        <div className='w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center mb-16'>
          <h2 className='mb-6 text-4xl font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight'>
            <span className='block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500'>
              Professional Work
            </span>
          </h2>
        </div>

        <div className='space-y-24'>
          {professionalWork.map((section) => (
            <div 
              key={section.title}
              className='flex flex-col items-center gap-8 md:gap-12 md:flex-row group'
            >
              {/* Text Content - Left Side */}
              <div className='md:w-1/2'>
                <h3 className='text-3xl font-bold relative inline-block'>
                  {section.title}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-green-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </h3>
                <p className='mt-4 text-gray-600'>{section.description}</p>
                
                <div className='flex flex-wrap gap-2 mt-6'>
                  {section.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image - Right Side */}
              <div className='md:w-1/2'>
                <div className='relative overflow-hidden aspect-[16/9] group'>
                  <img
                    src={section.image}
                    alt={`${section.title} example`}
                    className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 transition-all duration-300 bg-black/0 group-hover:bg-black/20' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects