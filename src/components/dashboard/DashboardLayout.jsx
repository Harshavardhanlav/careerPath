import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(null);
  const [careerPath, setCareerPath] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      const user = await base44.auth.me();
      const progList = await base44.entities.UserProgress.filter({ created_by: user.email });
      if (progList.length === 0) {
        navigate('/analyze');
        return;
      }
      const prog = progList[0];
      setProgress(prog);

      if (prog.career_path_id) {
        const paths = await base44.entities.CareerPath.filter({ id: prog.career_path_id });
        if (paths.length > 0) setCareerPath(paths[0]);
      }
      setLoading(false);
    }
    load();
  }, [navigate]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body">
      <Sidebar mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />
      <div className="md:ml-64 flex flex-col min-h-screen">
        <TopBar
          onMenuClick={() => setMobileOpen(true)}
          progress={progress}
          onProgressUpdate={setProgress}
        />
        <main className="flex-1 p-4 md:p-6">
          <Outlet context={{ progress, setProgress, careerPath }} />
        </main>
      </div>
    </div>
  );
}