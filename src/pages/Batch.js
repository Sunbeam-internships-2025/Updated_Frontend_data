


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Batch() {
//   const [batches, setBatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const API_URL = "http://localhost:1111"; // Backend base URL

//   // Fetch all batches from API
//   const getAllBatches = async () => {
//     try {
//       setLoading(true);
//       setError('');
//       // Correct endpoint used here
//       const res = await axios.get(`${API_URL}/batch/all-batch`);
//       setBatches(res.data.data || []);
//     } catch (err) {
//       setError('Failed to fetch batches.');
//       console.error('Fetch error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Update batch status
//   const updateBatchStatus = async (batch_id, status) => {
//     try {
//       // Correct endpoint used here
//       await axios.put(`${API_URL}/batch/update-batch/${batch_id}`, {
//         isActive: parseInt(status)
//       });
//       await getAllBatches();
//     } catch (err) {
//       console.error('Update error:', err);
//       setError('Failed to update batch status.');
//     }
//   };

//   useEffect(() => {
//     getAllBatches();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4 text-gray-800">Batch Management</h1>

//       {error && (
//         <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
//           {error}
//         </div>
//       )}

//       {loading ? (
//         <div className="text-gray-600">Loading batches...</div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
//             <thead className="bg-gray-100 text-gray-700">
//               <tr>
//                 <th className="border px-4 py-2 text-left">Sr. No</th>
//                 <th className="border px-4 py-2 text-left">Batch ID</th>
//                 <th className="border px-4 py-2 text-left">Batch Name</th>
//                 <th className="border px-4 py-2 text-left">Is Active</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white text-gray-600">
//               {batches.length === 0 ? (
//                 <tr>
//                   <td colSpan="4" className="border px-4 py-2 text-center">
//                     No batches found.
//                   </td>
//                 </tr>
//               ) : (
//                 batches.map((batch, index) => (
//                   <tr key={batch.batch_id} className="hover:bg-gray-50">
//                     <td className="border px-4 py-2">{index + 1}</td>
//                     <td className="border px-4 py-2">{batch.batch_id}</td>
//                     <td className="border px-4 py-2">{batch.batch_name}</td>
//                     <td className="border px-4 py-2">
//                       <select
//                         className="border rounded px-2 py-1"
//                         value={batch.is_active ? 1 : 0}
//                         onChange={(e) => updateBatchStatus(batch.batch_id, e.target.value)}
//                       >
//                         <option value={1}>Active</option>
//                         <option value={0}>Inactive</option>
//                       </select>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Batch;



import axios from "axios";
import React, { useEffect, useState } from "react";
import "../batch.css"

function Batch() {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBatch, setNewBatch] = useState({ batchName: "", isActive: 1 });

  const API_URL = "http://localhost:1111"; // Backend base URL

  // Fetch all batches
  const getAllBatches = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await axios.get(`${API_URL}/batch/all-batch`);
      setBatches(res.data.data || []);
    } catch (err) {
      console.error("Error fetching batches:", err);
      setError("Failed to fetch batches.");
    } finally {
      setLoading(false);
    }
  };

  // Update batch status
  const updateBatchStatus = async (batchId, status) => {
    try {
      await axios.put(`${API_URL}/batch/update-batch/${batchId}`, { isActive: Number(status) });
      await getAllBatches();
    } catch (err) {
      console.error("Error updating batch:", err);
      setError("Failed to update batch status.");
    }
  };

  // Add new batch
  const handleAddBatch = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/batch/add-batch`, newBatch);
      await getAllBatches();
      setIsModalOpen(false);
      setNewBatch({ batchName: "", isActive: 1 });
    } catch (err) {
      console.error("Error adding batch:", err);
      setError(err?.response?.data?.error || "Failed to add batch.");
    }
  };

  useEffect(() => {
    getAllBatches();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Batch Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          + Add Batch
        </button>
      </div>

      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
      {loading ? (
        <div className="text-gray-600">Loading batches...</div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 border text-left">Sr. No</th>
                <th className="px-4 py-2 border text-left">Batch ID</th>
                <th className="px-4 py-2 border text-left">Batch Name</th>
                <th className="px-4 py-2 border text-left">Is Active</th>
              </tr>
            </thead>
            <tbody>
              {batches.length === 0 ? (
                <tr>
                  <td colSpan="4" className="border px-4 py-2 text-center">
                    No batches found.
                  </td>
                </tr>
              ) : (
                batches.map((batch, index) => (
                  <tr key={batch.batch_id} className="text-center hover:bg-gray-50">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{batch.batch_id}</td>
                    <td className="px-4 py-2 border">{batch.batch_name}</td>
                    <td className="px-4 py-2 border">
                      <select
                        className="border rounded px-2 py-1"
                        value={batch.is_active ? 1 : 0}
                        onChange={(e) => updateBatchStatus(batch.batch_id, e.target.value)}
                      >
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Batch Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add New Batch</h2>
            <form onSubmit={handleAddBatch} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Batch Name</label>
                <input
                  type="text"
                  value={newBatch.batchName}
                  onChange={(e) => setNewBatch({ ...newBatch, batchName: e.target.value })}
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  value={newBatch.isActive}
                  onChange={(e) => setNewBatch({ ...newBatch, isActive: Number(e.target.value) })}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value={1}>Active</option>
                  <option value={0}>Inactive</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Add Batch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Batch;
