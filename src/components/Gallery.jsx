import { useState } from "react";

/* ------------------ DATA ------------------ */
const categories = [
  {
    name: "Portraits",
    cover: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    projects: [
      {
        name: "Koko Project",
        images: [
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
        ],
      },
      {
        name: "Ife Project",
        images: [
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        ],
      },
    ],
  },

  {
    name: "Events",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552",
    projects: [
      {
        name: "Birthday",
        sub: [
          {
            name: "Koko Project",
            images: [
              "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
            ],
          },
          {
            name: "SD Project",
            images: [
              "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
            ],
          },
        ],
      },
      {
        name: "Wedding",
        sub: [
          {
            name: "Wedding A",
            images: [
              "https://images.unsplash.com/photo-1519741497674-611481863552",
            ],
          },
        ],
      },
      {
        name: "Burial",
        sub: [
          {
            name: "Burial A",
            images: [
              "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
            ],
          },
        ],
      },
    ],
  },

  {
    name: "Documentary",
    cover: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    projects: [
      {
        name: "DCL Project",
        images: [
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        ],
      },
      {
        name: "Ife",
        images: [
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        ],
      },
      {
        name: "SDK",
        images: [
          "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
        ],
      },
    ],
  },

  {
    name: "Product",
    cover: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    projects: [
      {
        name: "Nuban",
        images: [
          "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
        ],
      },
      {
        name: "IMC",
        images: [
          "https://images.unsplash.com/photo-1600180758890-6c43f04b8f4f",
        ],
      },
    ],
  },

  {
    name: "Campaign",
    cover: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    projects: [
      {
        name: "Shina Peter",
        images: [
          "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
        ],
      },
    ],
  },
];

const videos = [
  {
    id: 1,
    title: "Wedding Highlight",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

/* ------------------ COMPONENT ------------------ */
export default function Gallery() {
  const [activeTab, setActiveTab] = useState("photo");

  const [activeCategory, setActiveCategory] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeSub, setActiveSub] = useState(null);

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="bg-[#111111] text-white py-24 px-6 md:px-12 border-t border-white/10">

      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-light tracking-wide">
          Portfolio
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Explore our work across different styles and moments.
        </p>
      </div>

      {/* TOGGLE */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/10 rounded-full p-1 inline-flex">
          <button
            onClick={() => {
              setActiveTab("photo");
              setActiveCategory(null);
              setActiveProject(null);
              setActiveSub(null);
            }}
            className={`px-6 py-2 rounded-full text-sm ${
              activeTab === "photo" ? "bg-white text-black" : "text-white"
            }`}
          >
            Photo
          </button>

          <button
            onClick={() => setActiveTab("video")}
            className={`px-6 py-2 rounded-full text-sm ${
              activeTab === "video" ? "bg-white text-black" : "text-white"
            }`}
          >
            Videos
          </button>
        </div>
      </div>

      {/* ================= PHOTO ================= */}
      {activeTab === "photo" && (
        <>
          {/* LEVEL 1 */}
          {!activeCategory && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className="relative cursor-pointer rounded-xl overflow-hidden"
                >
                  <img src={cat.cover} className="h-60 md:h-72 w-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <h3 className="text-xl font-light">{cat.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* LEVEL 2 */}
          {activeCategory && !activeProject && (
            <div className="max-w-6xl mx-auto">
              <button onClick={() => setActiveCategory(null)} className="mb-6 text-gray-400">
                ← Back
              </button>

              <h3 className="text-2xl mb-6">{activeCategory.name}</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {activeCategory.projects.map((proj, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveProject(proj)}
                    className="relative cursor-pointer rounded-xl overflow-hidden"
                  >
                    <img
                      src={
                        proj.images?.[0] ||
                        proj.sub?.[0]?.images?.[0]
                      }
                      className="h-60 md:h-72 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <h3 className="text-lg font-light">{proj.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LEVEL 3 */}
          {activeProject && !activeSub && (
            <div className="max-w-6xl mx-auto">
              <button onClick={() => setActiveProject(null)} className="mb-6 text-gray-400">
                ← Back
              </button>

              <h3 className="text-2xl mb-6">{activeProject.name}</h3>

              {activeProject.sub ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {activeProject.sub.map((s, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveSub(s)}
                      className="relative cursor-pointer rounded-xl overflow-hidden"
                    >
                      <img
                        src={s.images[0]}
                        className="h-60 md:h-72 w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <h3 className="text-lg">{s.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {activeProject.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="h-60 md:h-72 w-full object-cover rounded-xl"
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* LEVEL 4 */}
          {activeSub && (
            <div className="max-w-6xl mx-auto">
              <button onClick={() => setActiveSub(null)} className="mb-6 text-gray-400">
                ← Back
              </button>

              <h3 className="text-2xl mb-6">{activeSub.name}</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {activeSub.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="h-60 md:h-72 w-full object-cover rounded-xl"
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* ================= VIDEO ================= */}
      {activeTab === "video" && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="relative cursor-pointer rounded-xl overflow-hidden"
            >
              <img src={video.thumbnail} className="h-60 md:h-72 w-full object-cover" />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-xl">
                ▶
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="w-full max-w-4xl">
            <video
              src={selectedVideo.videoUrl}
              controls
              autoPlay
              className="w-full rounded-xl"
            />
          </div>
        </div>
      )}

    </section>
  );
}