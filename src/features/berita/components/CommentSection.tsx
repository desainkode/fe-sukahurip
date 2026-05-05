"use client";

import React, { useState } from "react";
import { MessageSquare, Send, User } from "lucide-react";
import { Comment } from "../types";

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Warga Desa",
      content: "Terima kasih atas informasinya, sangat bermanfaat. Semoga pembangunan jalan segera merata ke seluruh dusun.",
      createdAt: "2 jam yang lalu",
    },
    {
      id: "2",
      author: "Pak RT 04",
      content: "Alhamdulillah, jalan di wilayah kami sekarang sudah jauh lebih baik. Sangat membantu mobilitas warga saat musim hujan.",
      createdAt: "5 jam yang lalu",
    }
  ]);

  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: "Anda (Anonim)",
      content: newComment,
      createdAt: "Baru saja",
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <section className="mt-20 border-t border-desa-blue-50 pt-16">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-desa-blue-50 text-desa-blue-600 shadow-inner">
          <MessageSquare size={20} />
        </div>
        <div>
          <h3 className="text-2xl font-black text-desa-blue-950 font-timeless tracking-tight">Komentar Warga</h3>
          <p className="text-[12px] font-bold text-desa-blue-900/40 uppercase tracking-widest">{comments.length} Diskusi Aktif</p>
        </div>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-16">
        <div className="relative overflow-hidden rounded-[24px] border border-desa-blue-100 bg-desa-blue-50/20 p-1.5 shadow-sm focus-within:border-desa-blue-400/50 focus-within:bg-white transition-all duration-500">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Tulis pendapat atau pertanyaan Anda..."
            className="w-full min-h-[80px] resize-none border-none bg-transparent p-4 text-[14px] font-medium text-black outline-none placeholder:text-desa-blue-900/30"
          />
          <div className="flex items-center justify-between border-t border-desa-blue-50 p-2.5 bg-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 px-3 text-[10px] font-bold text-desa-blue-900/40 uppercase tracking-wider">
              <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center border border-desa-blue-50">
                <User size={14} />
              </div>
              Tamu
            </div>
            <button
              type="submit"
              className="group flex items-center gap-2 rounded-xl bg-desa-blue-950 px-5 py-2.5 text-[12px] font-black text-white transition-all duration-500 hover:bg-desa-yellow-500 hover:text-[#000418] hover:shadow-xl hover:shadow-desa-yellow-500/20 active:scale-95 uppercase tracking-widest"
            >
              Kirim
              <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </form>

      {/* Comment List */}
      <div className="space-y-10">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-5 group">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-lg bg-desa-blue-50/50 flex items-center justify-center text-desa-blue-200 group-hover:text-desa-blue-600 transition-colors">
              <User size={28} />
            </div>
            <div className="flex-1 bg-white p-5 sm:p-6 rounded-[24px] border border-desa-blue-50 group-hover:border-desa-blue-100 group-hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <p className="text-[15px] font-black text-desa-blue-950 font-timeless">{comment.author}</p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-desa-blue-900/30 bg-desa-blue-50/50 px-2.5 py-0.5 rounded-full">
                  <span>{comment.createdAt}</span>
                </div>
              </div>
              <p className="text-[14px] leading-relaxed text-desa-blue-950/70 font-medium">
                {comment.content}
              </p>
              <div className="mt-4 flex items-center gap-5">
                <button className="text-[11px] font-bold text-desa-blue-600 hover:text-desa-yellow-600 uppercase tracking-widest transition-colors">Balas</button>
                <button className="text-[11px] font-bold text-desa-blue-900/40 hover:text-red-500 uppercase tracking-widest transition-colors">Sukai</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
