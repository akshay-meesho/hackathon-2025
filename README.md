# Cloud Cost Analyzer

A React application for analyzing cloud storage costs across AWS, GCP, and Azure platforms. This project has been refactored from a single monolithic file into a well-organized, modular structure.

## Project Structure

```
src/
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── LoadingSpinner.jsx  # Loading spinner component
│   │   ├── Confetti.jsx        # Confetti animation component
│   │   └── EmptyState.jsx      # Empty state display component
│   └── layout/                 # Layout components
│       ├── Header.jsx          # Application header with navigation
│       └── PageWrapper.jsx     # Main page wrapper component
├── pages/                      # Page-level components
│   ├── LoginPage.jsx           # User authentication page
│   ├── ChooseCloudPage.jsx     # Cloud provider selection page
│   ├── SelectBucketsPage.jsx   # Bucket selection page
│   ├── CostSavingPage.jsx      # Main cost analysis and optimization page
│   └── AdminPage.jsx           # Admin dashboard page
├── context/
│   └── AppContext.jsx          # Global application state management
├── data/
│   └── mockData.js             # Mock data for the application
├── utils/
│   └── calculations.js         # Utility functions for calculations
├── App.jsx                     # Main application component
└── index.js                    # Application entry point
```

## Key Features

### Authentication

- **Login credentials:**
  - Normal user: `user` / `password`
  - Admin user: `admin` / `password`

### Cloud Provider Support

- **AWS** - Amazon Web Services
- **GCP** - Google Cloud Platform
- **Azure** - Microsoft Azure

### Cost Analysis Features

1. **Stale Directory Optimization** - Identify and optimize unused directories
2. **Space Consumption Analysis** - Find large directories for compression opportunities
3. **Exponential Growth Detection** - Track rapidly growing directories
4. **Invisible Data Analysis** - Detect orphaned files and incomplete uploads

## Component Architecture

### Context Management

- **AppContext.jsx**: Centralized state management using React Context API
- Manages authentication, selected cloud provider, buckets, and optimization state

### Reusable UI Components

- **LoadingSpinner**: Animated loading indicator with size variants
- **Confetti**: Celebration animation for successful operations
- **EmptyState**: Consistent empty state displays with icons and messages

### Layout Components

- **Header**: Navigation bar with logout, admin access, and back functionality
- **PageWrapper**: Consistent page layout wrapper

### Page Components

- **LoginPage**: User authentication with mock credentials
- **ChooseCloudPage**: Cloud provider selection interface
- **SelectBucketsPage**: Multi-select bucket interface with optimization status
- **CostSavingPage**: Complex analysis dashboard with multiple optimization views
- **AdminPage**: Protected admin-only dashboard

### Utility Functions

- **calculations.js**: Pure functions for data calculations and transformations
- Separation of business logic from UI components

## Data Flow

1. **Authentication**: Users log in through LoginPage
2. **Cloud Selection**: Users choose their cloud provider
3. **Bucket Selection**: Users select buckets to analyze
4. **Cost Analysis**: Complex analysis with multiple optimization opportunities
5. **Optimization**: Users can apply optimization rules and track savings

## Usage

```jsx
import App from "./src/App";

// The app is self-contained and ready to use
export default App;
```

## Development Benefits

### Maintainability

- Separated concerns with clear component boundaries
- Reusable components reduce code duplication
- Centralized state management

### Scalability

- Easy to add new pages or cloud providers
- Modular structure supports feature additions
- Clear separation of data, UI, and business logic

### Testing

- Individual components can be unit tested
- Utility functions are pure and easily testable
- Mock data is centralized and modifiable

### Code Organization

- Clear file structure with logical groupings
- Consistent naming conventions
- Single responsibility principle applied

## Migration Notes

The original `Index.jsx` (1400+ lines) has been successfully refactored into:

- 9 focused component files
- 1 context provider
- 1 data file
- 1 utilities file
- 1 main app file

This refactoring maintains 100% of the original functionality while dramatically improving code organization and maintainability.
