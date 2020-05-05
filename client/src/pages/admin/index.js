import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

import AdminPageView from "./view";
import AdminLoginView from "./login";
import EditingView from "./edit";

const AdminPageContainer = () => {
  const [accomplishments, setAccomplishments] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const fetchAccomplishments = async () => {
    const res = await axios.get("/api/goals");
    setAccomplishments(res.data);
  };

  const submitLogin = async (pass) => {
    if (pass === process.env.REACT_APP_ADMIN_PASS) {
      setAuthenticated(true);
      return true;
    }
    return false;
  };

  const submitEdit = async (inputs) => {
    const res = await axios.put(`/api/goals/${editingId}`, inputs);
    setAccomplishments(res.data);
    setEditingId(null);
  };

  const deleteGoal = async (id) => {
    const res = await axios.delete(`/api/goals/${id}`);
    setAccomplishments(res.data);
  };

  useEffect(() => {
    fetchAccomplishments();
  }, []);

  const goalToEdit = useMemo(
    () => accomplishments.find((goal) => goal._id === editingId),
    [editingId, accomplishments]
  );

  return authenticated ? (
    editingId ? (
      <EditingView
        goal={goalToEdit}
        cancelEdit={() => setEditingId(null)}
        submitEdit={submitEdit}
      />
    ) : (
      <AdminPageView
        accomplishments={accomplishments}
        editGoal={(id) => setEditingId(id)}
        deleteGoal={deleteGoal}
      />
    )
  ) : (
    <AdminLoginView submitLogin={submitLogin} />
  );
};

export default AdminPageContainer;
