const appData = {
    teachers: [
        {
            id: 1,
            name: "أ.حيدر عبد الأئمة",
            subject: "الرياضيات - السادس الإعدادي",
            lecturesCount: 2026,
            image: "math.jpg",
            chapters: [
                {
                    id: 101,
                    name: "الفصل الاول - الاعداد المركبة",
                    lectures: [
                        {title: "المحاضرة التعريفية", url: "https://vz-99e5c202-ca5.b-cdn.net/53e98122-e177-4b9b-a06c-525b9da6d895/1080p/video.m3u8"},
                        {title: "محاضرة 1", url: "https://vz-99e5c202-ca5.b-cdn.net/cd2d15a6-156b-420e-9f31-4efbdfb85ba3/1080p/video.m3u8"},
                        {title: "محاضرة 2", url: "https://vz-99e5c202-ca5.b-cdn.net/27af24cb-6ef1-4f16-9d74-320dc8915bf9/1080p/video.m3u8"},
                        {title: "محاضرة 3", url: "https://vz-99e5c202-ca5.b-cdn.net/73a0ef12-89ba-482a-88e3-e8bbe90d40f7/1080p/video.m3u8"},
                        {title: "محاضرة 4", url: "https://vz-99e5c202-ca5.b-cdn.net/5d58ba54-c960-4fae-b0e6-a92561185627/1080p/video.m3u8"},
                        {title: "محاضرة 5", url: "https://vz-99e5c202-ca5.b-cdn.net/5d58ba54-c960-4fae-b0e6-a92561185627/1080p/video.m3u8"},
                    ]
                },
            ]
        },
        {
            id: 2,
            name: "أ.حسين محمد",
            subject: "الفيزياء - السادس الإعدادي",
            lecturesCount: 2026,
            image: "physics.jpg",
            chapters: [
                {
                    id: 201,
                    name: "الفصل الاول - المتسعات",
                    lectures: [
                        {title: "اساسيات الفيزياء", url: "https://vz-99e5c202-ca5.b-cdn.net/7f2873a8-c450-4db3-819a-1cfc518c23f8/1080p/video.m3u8"},
                        {title: "محاضرة 1", url: "https://vz-99e5c202-ca5.b-cdn.net/623af7df-e18e-49a5-a140-5db6238d2d0b/1080p/video.m3u8"},
                        {title: "محاضرة 2", url: "https://vz-99e5c202-ca5.b-cdn.net/b1e8199a-1e73-41f2-817b-195170e3fb2a/1080p/video.m3u8"},
                        {title: "محاضرة 3", url: "https://vz-99e5c202-ca5.b-cdn.net/c1c1be8d-4121-43a3-98d7-e251226d320e/1080p/video.m3u8"}
                    ]
                }
            ]
        },
                {
            id: 3,
            name: "أ.هاشم الغرباوي",
            subject: "الكيمياء - السادس الإعدادي",
            lecturesCount: 2026,
            image: "chemistry.jpg",
            chapters: [
                {
                    id: 301,
                    name: "الاساسيات",
                    lectures: [
                        {title: "اساسيات 1", url: "https://vz-99e5c202-ca5.b-cdn.net/092c23a8-0cbe-44a6-a4b4-cefb20910478/1080p/video.m3u8"},
                        {title: "اساسيات 2", url: "https://vz-99e5c202-ca5.b-cdn.net/916fe1c7-c230-4495-b525-c8a5bf9fbb41/1080p/video.m3u8"},
                
                    ]
                },
                            {
            id: 302, // رقم جديد مختلف
            name: "الفصل الاول - الثرموداينمك", // اسم الفصل الجديد
            lectures: [
                { title: "محاضرة 1", url: "https://vz-99e5c202-ca5.b-cdn.net/a5450272-34bf-47cd-8e63-4fbcbdd180f5/1080p/video.m3u8" },
                { title: "محاضرة 2", url: "https://vz-99e5c202-ca5.b-cdn.net/4d4dbdf8-2e6b-4ebb-8917-d99ca17943cb/1080p/video.m3u8" },
                { title: "محاضرة 3", url: "https://vz-99e5c202-ca5.b-cdn.net/3ca71c40-706a-4cd2-855f-57138b4cf646/1080p/video.m3u8" }
            ]
        }
            ]
        }
    ],
    
    
    currentTeacher: null,
    currentChapter: null,
    videoPlayer: null,
    playbackRates: [0.5, 0.75, 1, 1.5, 2],
    currentPlaybackRate: 1
};

// تعريف الدوال العامة أولاً
function closeVideoPlayer() {
    const videoPlayer = document.getElementById('main-video-player');
    if (videoPlayer) {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }
    const videoModal = document.getElementById('video-modal');
    if (videoModal) {
        videoModal.classList.remove('active');
        setTimeout(() => {
            videoModal.style.display = 'none';
        }, 300);
    }
}

function backToTeachers() {
    closeVideoPlayer();
    document.getElementById('lectures-section').classList.remove('active');
    document.getElementById('chapters-section').classList.remove('active');
    document.getElementById('teachers-section').classList.add('active');
}

function backToChapters() {
    closeVideoPlayer();
    document.getElementById('lectures-section').classList.remove('active');
    document.getElementById('chapters-section').classList.add('active');
}

function initApp() {
    const elements = {
        teachersList: document.getElementById('teachers-list'),
        chaptersList: document.getElementById('chapters-list'),
        lecturesList: document.getElementById('lectures-list'),
        currentTeacherName: document.getElementById('current-teacher-name'),
        currentChapterName: document.getElementById('current-chapter-name'),
        currentLectureTitle: document.getElementById('current-lecture-title'),
        videoModal: document.getElementById('video-modal'),
        videoPlayer: document.getElementById('main-video-player'),
        playPauseBtn: document.getElementById('play-pause-btn'),
        progressBar: document.getElementById('progress-bar'),
        progressFill: document.getElementById('progress-fill'),
        currentTime: document.getElementById('current-time'),
        duration: document.getElementById('duration'),
        muteBtn: document.getElementById('mute-btn'),
        volumeSlider: document.getElementById('volume-slider'),
        fullscreenBtn: document.getElementById('fullscreen-btn'),
        rewindBtn: document.getElementById('rewind-btn'),
        forwardBtn: document.getElementById('forward-btn'),
        speedBtn: document.getElementById('speed-btn'),
        videoControls: document.getElementById('video-controls'),
        mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
        navbarLinks: document.querySelector('.navbar-links')
    };

    // تعيين الدوال العاملة على window لجعلها متاحة globally
    window.closeVideoPlayer = closeVideoPlayer;
    window.backToTeachers = backToTeachers;
    window.backToChapters = backToChapters;

    appData.videoPlayer = elements.videoPlayer;

    function displayTeachers() {
        elements.teachersList.innerHTML = '';
        
        appData.teachers.forEach(teacher => {
            const teacherCard = document.createElement('div');
            teacherCard.className = 'teacher-card';
            teacherCard.innerHTML = `
                <div class="card-content">
                    <div class="teacher-info">
                        <img src="${teacher.image}" alt="${teacher.name}" class="teacher-image">
                        <div>
                            <h3 class="teacher-name">${teacher.name}</h3>
                            <p class="teacher-subject">${teacher.subject}</p>
                        </div>
                    </div>
                    <div class="teacher-meta">
                        <span><i class="fas fa-video"></i> محاضرات ${teacher.lecturesCount} </span>
                    </div>
                </div>
            `;
            
            teacherCard.addEventListener('click', () => showTeacherChapters(teacher));
            elements.teachersList.appendChild(teacherCard);
        });
    }

    function showTeacherChapters(teacher) {
        appData.currentTeacher = teacher;
        elements.currentTeacherName.textContent = `${teacher.name} - ${teacher.subject}`;
        
        elements.chaptersList.innerHTML = '';
        
        teacher.chapters.forEach(chapter => {
            const chapterCard = document.createElement('div');
            chapterCard.className = 'chapter-card';
            chapterCard.innerHTML = `
                <div class="card-content">
                    <h3 class="chapter-name">${chapter.name}</h3>
                    <p class="lectures-count">${chapter.lectures.length} محاضرات</p>
                </div>
            `;
            
            chapterCard.addEventListener('click', () => showChapterLectures(chapter));
            elements.chaptersList.appendChild(chapterCard);
        });
        
        document.getElementById('teachers-section').classList.remove('active');
        document.getElementById('chapters-section').classList.add('active');
    }

    function showChapterLectures(chapter) {
        appData.currentChapter = chapter;
        elements.currentChapterName.textContent = chapter.name;
        
        elements.lecturesList.innerHTML = '';
        
        chapter.lectures.forEach((lecture, index) => {
            const lectureCard = document.createElement('div');
            lectureCard.className = 'lecture-card';
            lectureCard.innerHTML = `
                <div class="card-content">
                    <div class="lecture-name">
                        <i class="fas fa-play-circle"></i>
                        <span>${lecture.title}</span>
                    </div>
                </div>
            `;
            
            lectureCard.addEventListener('click', () => playLecture(lecture.title, lecture.url));
            elements.lecturesList.appendChild(lectureCard);
        });
        
        document.getElementById('chapters-section').classList.remove('active');
        document.getElementById('lectures-section').classList.add('active');
    }

    function playLecture(lectureTitle, lectureUrl) {
        elements.currentLectureTitle.textContent = `${lectureTitle} - ${appData.currentChapter.name}`;
        elements.videoPlayer.src = lectureUrl;
        elements.videoModal.style.display = 'flex';
        elements.playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        
        setTimeout(() => {
            elements.videoModal.classList.add('active');
            elements.videoPlayer.play().then(() => {
                elements.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }).catch(error => {
                console.error('Error playing video:', error);
            });
        }, 10);
    }

    function setupVideoControls() {
        elements.playPauseBtn.addEventListener('click', togglePlay);
        
        elements.videoPlayer.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });

        function togglePlay() {
            if (elements.videoPlayer.paused) {
                elements.videoPlayer.play();
                elements.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                elements.videoPlayer.pause();
                elements.playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        }

        elements.videoPlayer.addEventListener('timeupdate', updateProgress);
        
        function updateProgress() {
            const percent = (elements.videoPlayer.currentTime / elements.videoPlayer.duration) * 100;
            elements.progressFill.style.width = `${percent}%`;
            elements.currentTime.textContent = formatTime(elements.videoPlayer.currentTime);
        }

        elements.progressBar.addEventListener('click', seek);
        
        function seek(e) {
            const rect = elements.progressBar.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            elements.videoPlayer.currentTime = pos * elements.videoPlayer.duration;
        }

        elements.rewindBtn.addEventListener('click', () => {
            elements.videoPlayer.currentTime -= 10;
        });
        
        elements.forwardBtn.addEventListener('click', () => {
            elements.videoPlayer.currentTime += 10;
        });

        elements.muteBtn.addEventListener('click', toggleMute);
        elements.volumeSlider.addEventListener('input', updateVolume);
        
        function toggleMute() {
            elements.videoPlayer.muted = !elements.videoPlayer.muted;
            updateMuteButton();
        }
        
        function updateVolume() {
            elements.videoPlayer.volume = elements.volumeSlider.value / 100;
            elements.videoPlayer.muted = false;
            updateMuteButton();
        }
        
        function updateMuteButton() {
            if (elements.videoPlayer.muted || elements.videoPlayer.volume === 0) {
                elements.muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                elements.volumeSlider.value = 0;
            } else {
                elements.muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                elements.volumeSlider.value = elements.videoPlayer.volume * 100;
            }
        }

        elements.speedBtn.addEventListener('click', function() {
            const currentIndex = appData.playbackRates.indexOf(appData.currentPlaybackRate);
            const nextIndex = (currentIndex + 1) % appData.playbackRates.length;
            appData.currentPlaybackRate = appData.playbackRates[nextIndex];
            elements.videoPlayer.playbackRate = appData.currentPlaybackRate;
            elements.speedBtn.innerHTML = `<span>${appData.currentPlaybackRate}x</span>`;
        });

        elements.fullscreenBtn.addEventListener('click', toggleFullscreen);
        
        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                elements.videoPlayer.requestFullscreen().catch(err => {
                    console.error('Error attempting to enable fullscreen:', err);
                });
            } else {
                document.exitFullscreen();
            }
        }

        elements.videoPlayer.addEventListener('loadedmetadata', () => {
            elements.duration.textContent = formatTime(elements.videoPlayer.duration);
            elements.videoPlayer.playbackRate = 1;
            elements.speedBtn.innerHTML = '<span>1x</span>';
            appData.currentPlaybackRate = 1;
        });

        elements.videoPlayer.addEventListener('ended', () => {
            elements.playPauseBtn.innerHTML = '<i class="fas fa-redo"></i>';
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.videoModal.style.display === 'flex') {
                closeVideoPlayer();
            }
        });
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    elements.mobileMenuBtn.addEventListener('click', () => {
        elements.navbarLinks.classList.toggle('active');
    });

    displayTeachers();
    setupVideoControls();
}

document.addEventListener('DOMContentLoaded', initApp);

