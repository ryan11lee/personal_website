export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  status: 'completed' | 'in-progress' | 'archived'
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  date: string
}

export const projects: Project[] = [
  {
    id: 'autoencoder-anomaly-detection',
    title: 'Utilizing Autoencoders For Anomaly Detection',
    description:
      'Advanced machine learning approach for identifying anomalies in complex datasets using autoencoder neural networks.',
    longDescription:
      'This project explores the use of autoencoder neural networks for unsupervised anomaly detection. The approach leverages the reconstruction error of autoencoders to identify outliers and anomalous patterns in multivariate datasets. The implementation includes data preprocessing, model architecture design, hyperparameter tuning, and evaluation metrics specifically tailored for anomaly detection tasks.',
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'NumPy',
      'Pandas',
      'Scikit-learn',
    ],
    category: 'Machine Learning',
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/ryan11lee/autoencoder-anomaly-detection',
    imageUrl: '/projects/autoencoder-thumb.jpg',
    date: '2024-01-15',
  },
  {
    id: 'dynamic-time-warping',
    title: 'Exploration of Dynamic Time Warping',
    description:
      'Deep dive into DTW algorithms for time series analysis and pattern matching applications.',
    longDescription:
      'An in-depth exploration of Dynamic Time Warping (DTW) algorithms and their applications in time series analysis. This project covers the mathematical foundations of DTW, various distance metrics, optimization techniques, and practical implementations for pattern matching in temporal data. Includes comparative analysis with other time series similarity measures and real-world case studies.',
    technologies: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'DTW', 'FastDTW'],
    category: 'Time Series Analysis',
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/ryan11lee/dtw-exploration',
    imageUrl: '/projects/dtw-thumb.jpg',
    date: '2023-11-20',
  },
  {
    id: 'multivariate-forecasting',
    title: 'Multivariate Time Series Forecasting',
    description:
      'Advanced forecasting models for complex multivariate time series data with seasonal patterns.',
    longDescription:
      'Development of sophisticated forecasting models for multivariate time series data. The project incorporates various approaches including ARIMA, LSTM networks, and Prophet models to handle complex temporal dependencies, seasonal patterns, and external factors. Includes comprehensive model evaluation, feature engineering, and deployment considerations for production environments.',
    technologies: ['Python', 'PyTorch', 'Prophet', 'ARIMA', 'Pandas', 'Plotly'],
    category: 'Time Series Analysis',
    status: 'in-progress',
    featured: false,
    githubUrl: 'https://github.com/ryan11lee/multivariate-forecasting',
    imageUrl: '/projects/forecasting-thumb.jpg',
    date: '2024-03-10',
  },
  {
    id: 'statistical-process-control',
    title: 'Statistical Process Control Dashboard',
    description:
      'Interactive dashboard for monitoring and analyzing statistical process control metrics.',
    longDescription:
      'A comprehensive dashboard solution for statistical process control (SPC) monitoring. Features real-time data visualization, control chart generation, trend analysis, and automated alerting for out-of-control processes. Built with modern web technologies and designed for manufacturing and quality control environments.',
    technologies: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'SQLAlchemy'],
    category: 'Data Visualization',
    status: 'completed',
    featured: false,
    githubUrl: 'https://github.com/ryan11lee/spc-dashboard',
    liveUrl: 'https://spc-dashboard-demo.streamlit.app',
    imageUrl: '/projects/spc-thumb.jpg',
    date: '2023-09-15',
  },
]

export const categories = [
  'All',
  'Machine Learning',
  'Time Series Analysis',
  'Data Visualization',
  'Statistics',
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects
  return projects.filter((project) => project.category === category)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
