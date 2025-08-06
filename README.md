# Employee Creation Application

## Features

- **Responsive Design**: Fully responsive UI that works across all devices
- **Modular Components**: Clean, reusable component architecture
- **Form Validation**: Built-in form validation and error handling
- **Search Functionality**: Real-time search through employee records
- **Modern UI**: Clean, professional interface with smooth animations
- **Accessibility**: WCAG compliant with proper focus management

## Components

### Header Component (`src/components/Header.js`)
- Navigation tabs for Employee Master and Employee Creation
- Back navigation button
- Sub-navigation for different sections (Employee Details, Address, Skill Set)

### EmployeeForm Component (`src/components/EmployeeForm.js`)
- Comprehensive employee information form
- Personal details section
- Privacy policy acknowledgment
- Form validation and submission handling

### EmployeeTable Component (`src/components/EmployeeTable.js`)
- Searchable employee records table
- Action buttons for filtering, adding, downloading, and uploading
- Edit and delete functionality for individual records
- Responsive table with horizontal scrolling on mobile

### FormField Component (`src/components/FormField.js`)
- Reusable form field component
- Supports text inputs, select dropdowns, and other input types
- Consistent styling and validation

## Technology Stack

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Font**: Geist Sans (Google Fonts)

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Application**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.js            # Root layout component
│   └── page.js              # Main page component
└── components/
│    ├── Header.js            # Navigation and header component
│    ├── EmployeeForm.js      # Employee creation form
│    ├── EmployeeTable.js     # Employee records table
│    └── FormField.js         # Reusable form field component
└── _home/
│  
│
```

## Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Form Fields

### Required Fields
- Employee ID (auto-generated)
- Employee Type
- First Name
- Last Name

### Optional Fields
- Middle Name
- Mobile Phone
- Home Phone
- Personal Email
- Physically Handicapped

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- Follows React best practices
- Uses functional components with hooks
- Consistent naming conventions
- Proper TypeScript-like prop validation

## Future Enhancements

- [ ] Address and Skill Set tabs implementation
- [ ] Data persistence with backend API
- [ ] Advanced filtering and sorting
- [ ] Bulk operations
- [ ] Export to PDF/Excel
- [ ] User authentication
- [ ] Role-based access control

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
