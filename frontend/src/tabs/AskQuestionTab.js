// // // // AskQuestionTab.js
// // // import React, { useState, useEffect } from 'react';
// // // import axiosInstance from '../utils/axiosInstance';

// // // const AskQuestionTab = () => {
// // //   const [question, setQuestion] = useState('');
// // //   const [submittedQuestions, setSubmittedQuestions] = useState([]);
// // //   const [error, setError] = useState('');

// // //   useEffect(() => {
// // //     fetchQuestions();
// // //   }, []);

// // //   // Fetch all previously asked questions by the customer
// // //   const fetchQuestions = async () => {
// // //     try {
// // //       const response = await axiosInstance.get('/customer/questions');
// // //       setSubmittedQuestions(response.data.questions);
// // //     } catch (err) {
// // //       console.error('Error fetching questions:', err);
// // //     }
// // //   };

// // //   // Handle question submission
// // //   const handleSubmitQuestion = async () => {
// // //     const customerId = localStorage.getItem('customerId'); // Retrieve customer ID from localStorage
  
// // //     if (!customerId) {
// // //       setError('Customer ID not found. Please log in again.');
// // //       return;
// // //     }
  
// // //     if (!questionText.trim()) {
// // //       setError('Question cannot be empty.');
// // //       return;
// // //     }
  
// // //     try {
// // //       const response = await axiosInstance.post('/customer/questions', {
// // //         customerId, // Include customerId
// // //         questionText,
// // //       });
  
// // //       setSuccess('Your question has been submitted successfully!');
// // //       setQuestionText('');
// // //       setError('');
// // //     } catch (err) {
// // //       console.error('Error submitting question:', err);
// // //       setError('Failed to submit the question. Please try again.');
// // //     }
// // //   };
  

// // //   return (
// // //     <div>
// // //       <h3>Ask a Question</h3>
// // //       <div>
// // //         <input
// // //           type="text"
// // //           placeholder="Enter your question"
// // //           value={question}
// // //           onChange={(e) => setQuestion(e.target.value)}
// // //         />
// // //         <button onClick={handleSubmitQuestion}>Submit Question</button>
// // //       </div>
// // //       {error && <p className="error">{error}</p>}

// // //       <div>
// // //         <h4>Your Submitted Questions</h4>
// // //         {submittedQuestions.length > 0 ? (
// // //           <ul>
// // //             {submittedQuestions.map((q) => (
// // //               <li key={q.QuestionID}>
// // //                 <p><strong>Question:</strong> {q.Question}</p>
// // //                 <p><strong>Answer:</strong> {q.Answer ? q.Answer : 'Not answered yet'}</p>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         ) : (
// // //           <p>No questions submitted yet.</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AskQuestionTab;

// // import React, { useState, useEffect } from 'react';
// // import axiosInstance from '../utils/axiosInstance';

// // const AskQuestionTab = () => {
// //   const [question, setQuestion] = useState('');
// //   const [submittedQuestions, setSubmittedQuestions] = useState([]);
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');

// //   useEffect(() => {
// //     fetchQuestions();
// //   }, []);

// //   // Fetch all previously asked questions by the customer
// //   const fetchQuestions = async () => {
// //     const customerId = localStorage.getItem('customerId'); // Ensure customer ID exists
// //     if (!customerId) {
// //       setError('Customer ID not found. Please log in again.');
// //       return;
// //     }

// //     try {
// //       const response = await axiosInstance.get('/customer/questions', {
// //         params: { customerId }, // Pass customerId as query param
// //       });
// //       setSubmittedQuestions(response.data.questions);
// //       setError('');
// //     } catch (err) {
// //       console.error('Error fetching questions:', err);
// //       setError('Failed to fetch questions.');
// //     }
// //   };

// //   // Handle question submission
// //   const handleSubmitQuestion = async () => {
// //     const customerId = localStorage.getItem('customerId'); // Retrieve customer ID from localStorage

// //     if (!customerId) {
// //       setError('Customer ID not found. Please log in again.');
// //       return;
// //     }

// //     if (!question.trim()) {
// //       setError('Question cannot be empty.');
// //       return;
// //     }

// //     try {
// //       const response = await axiosInstance.post('/customer/questions', {
// //         customerId, // Include customerId
// //         questionText: question, // Use the correct state variable
// //       });

// //       setSuccess('Your question has been submitted successfully!');
// //       setQuestion(''); // Clear the input field
// //       fetchQuestions(); // Re-fetch questions to update the list
// //       setError('');
// //     } catch (err) {
// //       console.error('Error submitting question:', err);
// //       setError('Failed to submit the question. Please try again.');
// //       setSuccess('');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h3>Ask a Question</h3>
// //       <div>
// //         <input
// //           type="text"
// //           placeholder="Enter your question"
// //           value={question}
// //           onChange={(e) => setQuestion(e.target.value)}
// //         />
// //         <button onClick={handleSubmitQuestion}>Submit Question</button>
// //       </div>
// //       {error && <p className="error">{error}</p>}
// //       {success && <p className="success">{success}</p>}

// //       <div>
// //         <h4>Your Submitted Questions</h4>
// //         {submittedQuestions.length > 0 ? (
// //           <ul>
// //             {submittedQuestions.map((q) => (
// //               <li key={q.QuestionID}>
// //                 <p>
// //                   <strong>Question:</strong> {q.Question}
// //                 </p>
// //                 <p>
// //                   <strong>Answer:</strong>{' '}
// //                   {q.Answer ? q.Answer : 'Not answered yet'}
// //                 </p>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p>No questions submitted yet.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AskQuestionTab;

// // import React, { useState, useEffect } from 'react';
// // import axiosInstance from '../utils/axiosInstance';

// // const AskQuestionTab = () => {
// //   const [question, setQuestion] = useState('');
// //   const [submittedQuestions, setSubmittedQuestions] = useState([]);
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');
// //   const [editQuestionId, setEditQuestionId] = useState(null);
// //   const [editText, setEditText] = useState('');
// //   const customerId = localStorage.getItem('customerId');

// //   useEffect(() => {
// //     fetchQuestions();
// //   }, []);

// //   const fetchQuestions = async () => {
// //     try {
// //       const response = await axiosInstance.get('/customer/questions');
// //       setSubmittedQuestions(response.data.questions);
// //       setError('');
// //     } catch (err) {
// //       console.error('Error fetching questions:', err);
// //       setError('Failed to fetch questions.');
// //     }
// //   };

// //   const handleSubmitQuestion = async () => {
// //     const customerId = localStorage.getItem('customerId');
// //     if (!customerId) {
// //       setError('Customer ID not found.');
// //       return;
// //     }
// //     if (!question.trim()) {
// //       setError('Question cannot be empty.');
// //       return;
// //     }
// //     try {
// //       await axiosInstance.post('/customer/questions', {
// //         customerId,
// //         questionText: question,
// //       });
// //       setSuccess('Question submitted successfully!');
// //       setQuestion('');
// //       fetchQuestions();
// //       setError('');
// //     } catch (err) {
// //       console.error('Error submitting question:', err);
// //       setError('Failed to submit question.');
// //     }
// //   };

// //   const handleDeleteQuestion = async (questionId) => {
// //     try {
// //       await axiosInstance.delete(`/customer/questions/${questionId}`);
// //       setSuccess('Question deleted successfully!');
// //       fetchQuestions();
// //     } catch (err) {
// //       console.error('Error deleting question:', err);
// //       setError('Failed to delete question.');
// //     }
// //   };

// //   const handleEditQuestion = async () => {
// //     try {
// //       await axiosInstance.put(`/customer/questions/${editQuestionId}`, {
// //         updatedQuestion: editText,
// //       });
// //       setSuccess('Question updated successfully!');
// //       setEditQuestionId(null);
// //       setEditText('');
// //       fetchQuestions();
// //     } catch (err) {
// //       console.error('Error updating question:', err);
// //       setError('Failed to update question.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h3>Ask a Question</h3>
// //       <div>
// //         <input
// //           type="text"
// //           placeholder="Enter your question"
// //           value={question}
// //           onChange={(e) => setQuestion(e.target.value)}
// //         />
// //         <button onClick={handleSubmitQuestion}>Submit Question</button>
// //       </div>
// //       {error && <p className="error">{error}</p>}
// //       {success && <p className="success">{success}</p>}

// //       <h4>All Questions</h4>
// //       {submittedQuestions.length > 0 ? (
// //         <ul>
// //           {submittedQuestions.map((q) => (
// //             <li key={q.QuestionID}>
// //               {editQuestionId === q.QuestionID ? (
// //                 <div>
// //                   <input
// //                     type="text"
// //                     value={editText}
// //                     onChange={(e) => setEditText(e.target.value)}
// //                   />
// //                   <button onClick={handleEditQuestion}>Save</button>
// //                   <button onClick={() => setEditQuestionId(null)}>Cancel</button>
// //                 </div>
// //               ) : (
// //                 <div>
// //                   <p><strong>Question:</strong> {q.Question}</p>
// //                   <p><strong>Answer:</strong> {q.Answer || 'Not answered yet'}</p>
// //                   {customerId == q.CustomerID && (<div>
// //                     <button onClick={() => handleDeleteQuestion(q.QuestionID)}>Delete</button>
// //                   <button onClick={() => {
// //                     setEditQuestionId(q.QuestionID);
// //                     setEditText(q.Question);
// //                   }}>
// //                     Edit
// //                   </button>
// //                 </div>)}
// //                 </div>
// //               )}
// //             </li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>No questions submitted yet.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default AskQuestionTab;


// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../utils/axiosInstance';

// const AskQuestionTab = () => {
//   const [question, setQuestion] = useState('');
//   const [submittedQuestions, setSubmittedQuestions] = useState([]);
//   const [filteredQuestions, setFilteredQuestions] = useState([]);
//   const [filterMode, setFilterMode] = useState('all'); // all | mine
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [editQuestionId, setEditQuestionId] = useState(null);
//   const [editText, setEditText] = useState('');
//   const customerId = localStorage.getItem('customerId');

//   // Fetch all questions on component mount
//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await axiosInstance.get('/customer/questions');
//       setSubmittedQuestions(response.data.questions);
//       applyFilter(response.data.questions, filterMode);
//       setError('');
//     } catch (err) {
//       console.error('Error fetching questions:', err);
//       setError('Failed to fetch questions.');
//     }
//   };

//   // Apply filter based on the selected mode
//   const applyFilter = (questions, mode) => {
//     if (mode === 'mine') {
//       const filtered = questions.filter((q) => q.CustomerID == customerId);
//       setFilteredQuestions(filtered);
//     } else {
//       setFilteredQuestions(questions);
//     }
//   };

//   // Handle question submission
//   const handleSubmitQuestion = async () => {
//     if (!customerId) {
//       setError('Customer ID not found.');
//       return;
//     }
//     if (!question.trim()) {
//       setError('Question cannot be empty.');
//       return;
//     }
//     try {
//       await axiosInstance.post('/customer/questions', {
//         customerId,
//         questionText: question,
//       });
//       setSuccess('Question submitted successfully!');
//       setQuestion('');
//       fetchQuestions();
//       setError('');
//     } catch (err) {
//       console.error('Error submitting question:', err);
//       setError('Failed to submit question.');
//     }
//   };

//   // Handle question deletion
//   const handleDeleteQuestion = async (questionId) => {
//     try {
//       await axiosInstance.delete(`/customer/questions/${questionId}`);
//       setSuccess('Question deleted successfully!');
//       fetchQuestions();
//     } catch (err) {
//       console.error('Error deleting question:', err);
//       setError('Failed to delete question.');
//     }
//   };

//   // Handle question editing
//   const handleEditQuestion = async () => {
//     try {
//       await axiosInstance.put(`/customer/questions/${editQuestionId}`, {
//         updatedQuestion: editText,
//       });
//       setSuccess('Question updated successfully!');
//       setEditQuestionId(null);
//       setEditText('');
//       fetchQuestions();
//     } catch (err) {
//       console.error('Error updating question:', err);
//       setError('Failed to update question.');
//     }
//   };

//   // Switch between All Questions and My Questions
//   const handleFilterChange = (mode) => {
//     setFilterMode(mode);
//     applyFilter(submittedQuestions, mode);
//   };

//   return (
//     <div>
//       <h3>Ask a Question</h3>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter your question"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         <button onClick={handleSubmitQuestion}>Submit Question</button>
//       </div>
//       {error && <p className="error">{error}</p>}
//       {success && <p className="success">{success}</p>}

//       {/* Buttons to switch between All Questions and My Questions */}
//       <div>
//         <button
//           onClick={() => handleFilterChange('all')}
//           style={{
//             backgroundColor: filterMode === 'all' ? '#4CAF50' : '#f0f0f0',
//             color: filterMode === 'all' ? 'white' : 'black',
//             marginRight: '10px',
//           }}
//         >
//           All Questions
//         </button>
//         <button
//           onClick={() => handleFilterChange('mine')}
//           style={{
//             backgroundColor: filterMode === 'mine' ? '#4CAF50' : '#f0f0f0',
//             color: filterMode === 'mine' ? 'white' : 'black',
//           }}
//         >
//           My Questions
//         </button>
//       </div>

//       <h4>{filterMode === 'mine' ? 'My Submitted Questions' : 'All Questions'}</h4>
//       {filteredQuestions.length > 0 ? (
//         <ul>
//           {filteredQuestions.map((q) => (
//             <li key={q.QuestionID}>
//               {editQuestionId === q.QuestionID ? (
//                 <div>
//                   <input
//                     type="text"
//                     value={editText}
//                     onChange={(e) => setEditText(e.target.value)}
//                   />
//                   <button onClick={handleEditQuestion}>Save</button>
//                   <button onClick={() => setEditQuestionId(null)}>Cancel</button>
//                 </div>
//               ) : (
//                 <div>
//                   <p>
//                     <strong>Question:</strong> {q.Question}
//                   </p>
//                   <p>
//                     <strong>Answer:</strong> {q.Answer || 'Not answered yet'}
//                   </p>
//                   {customerId == q.CustomerID && (
//                     <div>
//                       <button onClick={() => handleDeleteQuestion(q.QuestionID)}>
//                         Delete
//                       </button>
//                       <button
//                         onClick={() => {
//                           setEditQuestionId(q.QuestionID);
//                           setEditText(q.Question);
//                         }}
//                       >
//                         Edit
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No questions available.</p>
//       )}
//     </div>
//   );
// };

// export default AskQuestionTab;


import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

const AskQuestionTab = () => {
  const [question, setQuestion] = useState('');
  const [submittedQuestions, setSubmittedQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [filterMode, setFilterMode] = useState('all'); // all | mine
  const [searchKeyword, setSearchKeyword] = useState(''); // For keyword filtering
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editQuestionId, setEditQuestionId] = useState(null);
  const [editText, setEditText] = useState('');
  const customerId = localStorage.getItem('customerId');

  // Fetch all questions on component mount
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axiosInstance.get('/customer/questions');
      setSubmittedQuestions(response.data.questions);
      applyFilter(response.data.questions, filterMode, searchKeyword);
      setError('');
    } catch (err) {
      console.error('Error fetching questions:', err);
      setError('Failed to fetch questions.');
    }
  };

  // Apply filter based on mode and keywords
  const applyFilter = (questions, mode, keyword) => {
    let filtered = mode === 'mine'
      ? questions.filter((q) => q.CustomerID == customerId)
      : questions;

    if (keyword.trim()) {
      filtered = filtered.filter((q) =>
        q.Question.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    setFilteredQuestions(filtered);
  };

  const handleFilterChange = (mode) => {
    setFilterMode(mode);
    applyFilter(submittedQuestions, mode, searchKeyword);
  };

  const handleKeywordSearch = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    applyFilter(submittedQuestions, filterMode, keyword);
  };

  const handleSubmitQuestion = async () => {
    if (!customerId) {
      setError('Customer ID not found.');
      return;
    }
    if (!question.trim()) {
      setError('Question cannot be empty.');
      return;
    }
    try {
      await axiosInstance.post('/customer/questions', {
        customerId,
        questionText: question,
      });
      setSuccess('Question submitted successfully!');
      setQuestion('');
      fetchQuestions();
    } catch (err) {
      console.error('Error submitting question:', err);
      setError('Failed to submit question.');
    }
  };

  const handleDeleteQuestion = async (questionId) => {
    try {
      await axiosInstance.delete(`/customer/questions/${questionId}`);
      setSuccess('Question deleted successfully!');
      fetchQuestions();
    } catch (err) {
      console.error('Error deleting question:', err);
      setError('Failed to delete question.');
    }
  };

  const handleEditQuestion = async () => {
    try {
      await axiosInstance.put(`/customer/questions/${editQuestionId}`, {
        updatedQuestion: editText,
      });
      setSuccess('Question updated successfully!');
      setEditQuestionId(null);
      setEditText('');
      fetchQuestions();
    } catch (err) {
      console.error('Error updating question:', err);
      setError('Failed to update question.');
    }
  };

  return (
    <div>
      <h3>Ask a Question</h3>
      <div>
        <input
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={handleSubmitQuestion}>Submit Question</button>
      </div>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      {/* Buttons to toggle between All Questions and My Questions */}
      <div>
        <button
          onClick={() => handleFilterChange('all')}
          style={{
            backgroundColor: filterMode === 'all' ? '#4CAF50' : '#f0f0f0',
            color: filterMode === 'all' ? 'white' : 'black',
            marginRight: '10px',
          }}
        >
          All Questions
        </button>
        <button
          onClick={() => handleFilterChange('mine')}
          style={{
            backgroundColor: filterMode === 'mine' ? '#4CAF50' : '#f0f0f0',
            color: filterMode === 'mine' ? 'white' : 'black',
          }}
        >
          My Questions
        </button>
      </div>

      {/* Search input for keyword filtering */}
      <div style={{ margin: '10px 0' }}>
        <input
          type="text"
          placeholder="Search questions..."
          value={searchKeyword}
          onChange={handleKeywordSearch}
        />
      </div>

      <h4>{filterMode === 'mine' ? 'My Submitted Questions' : 'All Questions'}</h4>
      {filteredQuestions.length > 0 ? (
        <ul>
          {filteredQuestions.map((q) => (
            <li key={q.QuestionID}>
              {editQuestionId === q.QuestionID ? (
                <div>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={handleEditQuestion}>Save</button>
                  <button onClick={() => setEditQuestionId(null)}>Cancel</button>
                </div>
              ) : (
                <div>
                  <p>
                    <strong>Question:</strong> {q.Question}
                  </p>
                  <p>
                    <strong>Answer:</strong> {q.Answer || 'Not answered yet'}
                  </p>
                  {filterMode === 'mine' && customerId == q.CustomerID && (
                    <div>
                      <button onClick={() => handleDeleteQuestion(q.QuestionID)}>
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          setEditQuestionId(q.QuestionID);
                          setEditText(q.Question);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
};

export default AskQuestionTab;
