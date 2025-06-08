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
                        {title: "محاضرة 6", url: "https://vz-99e5c202-ca5.b-cdn.net/ee5dbccd-ec8d-41c2-ba0c-366d78d3cb16/1080p/video.m3u8"},
                        {title: "محاضرة 7", url: "https://vz-99e5c202-ca5.b-cdn.net/18b7dd60-0da0-4d4a-9285-e4f81bf41eea/720p/video.m3u8"},
                        {title: "محاضرة 8", url: "https://vz-99e5c202-ca5.b-cdn.net/094997e9-f9da-4457-80f0-b6e0094ebef5/720p/video.m3u8"},
                        {title: "محاضرة 9", url: "https://vz-b26dd76f-dc1.b-cdn.net/1b2934b2-0c6c-420b-a100-2dc34288cd2e/720p/video.m3u8"},
                        {title: "محاضرة 10", url: "https://vz-b26dd76f-dc1.b-cdn.net/4074fd8c-d92f-4002-a393-390e7582b5b3/720p/video.m3u8"},
                        {title: "محاضرة 11 : وزاريات ايجاد الثوابت الجزء الثاني", url: "https://vz-b26dd76f-dc1.b-cdn.net/b32a6421-a06c-408a-9ffb-871a23c62135/720p/video.m3u8"},
                        {title: "محاضرة 12 : وزاريات ايجاد الثوابت الجزء الثالث", url: "https://vz-b26dd76f-dc1.b-cdn.net/040c58ef-0c2c-4a39-bcf0-2e69a163e449/720p/video.m3u8"},
                        {title: "محاضرة 13 : تحليل الفرق بين مربعين", url: "https://vz-b26dd76f-dc1.b-cdn.net/0265e720-3858-49ea-acc8-ff2a81e2daf6/720p/video.m3u8"},
                        {title: "محاضرة 14 : الجذور التربيعية للعدد المركب", url: "https://vz-b26dd76f-dc1.b-cdn.net/3734983e-98c4-4cdd-b7a1-a2a3198586b9/720p/video.m3u8"},
                        {title: "محاضرة 15 : (الجذور التربيعية للعدد المركب (النوع الثالث)", url: "https://vz-b26dd76f-dc1.b-cdn.net/3686e411-81ef-47c5-af65-db07fe8a2b51/720p/video.m3u8"}
                    ]
                }
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
                        {title: "محاضرة 3", url: "https://vz-99e5c202-ca5.b-cdn.net/c1c1be8d-4121-43a3-98d7-e251226d320e/1080p/video.m3u8"},
                        {title: "محاضرة 4", url: "https://vz-99e5c202-ca5.b-cdn.net/b9071139-ffe3-403c-aea5-ee3b00e403eb/1080p/video.m3u8"},
                        {title: "محاضرة 5 - المتسعة بوجود عازل", url: "https://vz-99e5c202-ca5.b-cdn.net/b9071139-ffe3-403c-aea5-ee3b00e403eb/720p/video.m3u8"},
                        {title: "قوانين المتسعة الواحدة بوجود عازل", url: "https://vz-99e5c202-ca5.b-cdn.net/e245ad79-ba95-4afe-8b4d-1ec2fe769cd0/720p/video.m3u8"},
                        {title: "قوانين المتسعة الواحدة بوجود عازل الجزء الثاني", url: "https://vz-99e5c202-ca5.b-cdn.net/117aec35-b995-41d3-8c1d-d24f813d3eef/720p/video.m3u8"},
                        {title: "محاضرة 7", url: "https://vz-b26dd76f-dc1.b-cdn.net/84f050c0-d4dd-4fbb-91e0-01d3b8875314/720p/video.m3u8"},
                        {title: "محاضرة 8", url: "https://vz-b26dd76f-dc1.b-cdn.net/26e28c3c-5256-4752-adf8-69960d4172ca/720p/video.m3u8"},
                        {title: "محاضرة 9", url: "https://vz-b26dd76f-dc1.b-cdn.net/5542581f-b201-4c25-b658-fae9c0ad6d20/720p/video.m3u8"},
                        {title: "المحاضرة 10 : المتسعة الواحدة بوجود العازل الكهربائي (الاثرائيات)", url: "https://vz-b26dd76f-dc1.b-cdn.net/44c9586c-e892-4965-a6a5-ee4bcef472f8/720p/video.m3u8"},
                        {title: "المحاضرة 11 : ربط التوالي والتوازي (كلاميات)", url: "https://vz-b26dd76f-dc1.b-cdn.net/cf7e372b-8145-47d1-ae71-7a615e1be1ba/720p/video.m3u8"},
                        {title: "المحاضرة 12 : الاسئلة المزعجة", url: "https://vz-b26dd76f-dc1.b-cdn.net/51980f97-8da2-4aa8-a298-82f2fd486e98/720p/video.m3u8"},
                        {title: "المحاضرة 13 : مسائل ربط التوالي والتوازي", url: "https://vz-b26dd76f-dc1.b-cdn.net/09e5f2aa-6066-46ca-9307-4a1e943f7c56/720p/video.m3u8"},



              
                        
                    ]
                },
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
                { title: "محاضرة 3", url: "https://vz-99e5c202-ca5.b-cdn.net/3ca71c40-706a-4cd2-855f-57138b4cf646/1080p/video.m3u8" },
                {title: "محاضرة 4", url: "https://vz-99e5c202-ca5.b-cdn.net/5be932f1-534a-488d-b0cb-7330eaf06491/1080p/video.m3u8"},
                {title: "محاضرة 5", url: "https://vz-99e5c202-ca5.b-cdn.net/85b5e458-8910-4d19-8316-b04016b70881/1080p/video.m3u8"},
                {title: "محاضرة 6", url: "https://vz-99e5c202-ca5.b-cdn.net/0bcec746-94f4-4361-9ce2-265e64672493/720p/video.m3u8"},
                {title: "محاضرة 7", url: "https://vz-b26dd76f-dc1.b-cdn.net/d81a8d08-0bc5-4ae7-ae42-35d936ea3772/720p/video.m3u8"},
                {title: "محاضرة 8", url: "https://vz-b26dd76f-dc1.b-cdn.net/e270018a-2c1a-4639-aa77-0eb2ea5ba5d6/720p/video.m3u8"},
                {title: "محاضرة 9", url: "https://vz-b26dd76f-dc1.b-cdn.net/b4410e93-4c8c-47ce-8bc1-6c5b6d486b72/720p/video.m3u8"},
                {title: "محاضرة 10", url: "https://vz-b26dd76f-dc1.b-cdn.net/ed162563-2e71-4470-98a7-fa2e270a7500/720p/video.m3u8"},
                {title: "محاضرة 11", url: "https://vz-b26dd76f-dc1.b-cdn.net/239d5159-5d25-4c5f-b7c8-ef7d78ea0ea5/720p/video.m3u8"},
                {title: "محاضرة 12", url: "https://vz-b26dd76f-dc1.b-cdn.net/a1356270-2ea9-49e6-b815-0ad0d56cc69b/720p/video.m3u8"},
                
            ]
        }
            ]
        },


        {
                    id: 4,
            name: "أ.سجاد العبيدي",
            subject: "انكليزي - السادس الإعدادي",
            lecturesCount: 2026,
            image: "English1.png",
            chapters: [
                {
                    id: 401,
                    name: "الاساسيات",
                    lectures: [
                        {title: "محاضرة 1", url: "https://vz-99e5c202-ca5.b-cdn.net/fae0d70a-e4c7-46e0-a046-e8b52436e9fa/1080p/video.m3u8"},
                        {title: "محاضرة 2", url: "https://vz-99e5c202-ca5.b-cdn.net/1138f878-d8fa-4ed2-8228-f4c237b53d16/1080p/video.m3u8"},
                        {title: "محاضرة 3", url: "https://vz-99e5c202-ca5.b-cdn.net/5cb01382-c193-420f-a418-e6b10e0959d2/1080p/video.m3u8"},
                
                    ]
                },
                {
    id: 402,
    name: "اليونت الاول",
    lectures: [
        {title: "محاضرة 1", url: "https://vz-99e5c202-ca5.b-cdn.net/cce812a8-9008-44cf-a16e-00d7d82235a2/720p/video.m3u8"},
        {title: "محاضرة 2", url: "https://vz-b26dd76f-dc1.b-cdn.net/db88faee-e114-4741-9478-11340dc7c52e/720p/video.m3u8"},
        {title: "محاضرة 3", url: "https://vz-b26dd76f-dc1.b-cdn.net/84debba3-e9cc-402f-988e-d160db5bf588/720p/video.m3u8"},
        {title: "محاضرة 4", url: "https://vz-b26dd76f-dc1.b-cdn.net/4f13598f-0ece-4f02-bd1e-73a895707225/720p/video.m3u8"},
        {title: "محاضرة 5", url: "https://vz-b26dd76f-dc1.b-cdn.net/e832a8c8-b623-43ec-b93a-859560231a74/720p/video.m3u8"},
        ]
        }
            ]
        },



                        {
                    id: 5,
            name: "أ.محمد قاسم",
            subject: "رياضيات - السادس الإعدادي",
            lecturesCount: 2026,
            image: "math2.png",
            chapters: [
                {
                    id: 501,
                    name: "الاعداد المركبة",
                    lectures: [
                        {title: "محاضرة 1 : مقدمة الاعداد المركبة", url: "https://vz-b26dd76f-dc1.b-cdn.net/f840ac1e-4f31-4717-ae52-4e6aaa95493c/720p/video.m3u8"},
                        {title: "محاضرة 2 : قوى (i)", url: "https://vz-b26dd76f-dc1.b-cdn.net/555c3369-af4a-4f22-b3dc-bfba92004d97/720p/video.m3u8"},
                        {title: "محاضرة 3 : العدد المركب", url: "https://vz-b26dd76f-dc1.b-cdn.net/035ffc65-8cbd-4a86-a775-c15ed6083384/720p/video.m3u8"},
                        {title: "محاضرة 4 : العمليات الحسابية على مجموعة الأعداد المركبة الجزء الأول", url: "https://vz-b26dd76f-dc1.b-cdn.net/e70c0704-1222-42d3-a052-b1b49ee6e22e/720p/video.m3u8"},
                        
                    ]
                },               
            ]
        },


                        {
                    id: 6,
            name: "أ.علي السوداني",
            subject: "فيزياء - السادس الإعدادي",
            lecturesCount: 2026,
            image: "physics1.png",
            chapters: [
                {
                    id: 601,
                    name: "الاساسيات",
                    lectures: [
                        {title: "محاضرة 1", url: "https://vz-99e5c202-ca5.b-cdn.net/583c5061-6c9e-4d79-b4c0-f4274fa4af84/1080p/video.m3u8"},
                        {title: "محاضرة 2", url: "https://vz-99e5c202-ca5.b-cdn.net/0290b143-5dae-4ad3-9af2-6af5b33da003/1080p/video.m3u8"},
                        {title: "محاضرة 3", url: "https://vz-99e5c202-ca5.b-cdn.net/156d9561-0cdf-45c4-85ca-118f490ec6f9/1080p/video.m3u8"},
                
                    ]
                },
                {
    id: 602,
    name: "الفصل الاول - المتسعات",
    lectures: [
        {title: "محاضرة 1", url: "https://vz-99e5c202-ca5.b-cdn.net/cb0aaac5-1614-4c41-a2b8-50d7463c9a68/1080p/video.m3u8"},
        {title: "محاضرة 2", url: "https://vz-99e5c202-ca5.b-cdn.net/e1bcbd27-d90a-4e9e-b930-5c41d4f89ba7/1080p/video.m3u8"},
        {title: "محاضرة 3 : سعة المتسعة الجزء الثاني", url: "https://vz-b26dd76f-dc1.b-cdn.net/943bc65f-4aad-43fb-9a6d-097781fff342/720p/video.m3u8"},
        {title: "محاضرة 4 : العازل الكهربائي", url: "https://vz-b26dd76f-dc1.b-cdn.net/ae1704ef-332a-4a63-8ea8-e7b4ef4ee2ba/720p/video.m3u8"},
        {title: "محاضرة 5 : قوة العزل الكهربائي", url: "https://vz-b26dd76f-dc1.b-cdn.net/1add4f26-cae5-4b2d-858b-256c35fff98f/720p/video.m3u8"},
        {title: "محاضرة 6 : تجربة فاراداي", url: "https://vz-b26dd76f-dc1.b-cdn.net/8d2fa5b7-805a-4a35-88bb-fa09bfe49837/720p/video.m3u8"},
        {title: "محاضرة 7 : تأثير المساحة السطحية والبعد بين صفيحتين على المتسعة", url: "https://vz-b26dd76f-dc1.b-cdn.net/0a31d3ee-f2be-4770-ac07-8f0fc2efdf98/720p/video.m3u8"},
        ]
        }
            ]
        },


                {
                    id: 7,
            name: "أ.رفل الزبيدي",
            subject: "عربي - السادس الإعدادي",
            lecturesCount: 2026,
            image: "Arabic1.png",
            chapters: [
                {
                    id: 701,
                    name: "الاساسيات",
                    lectures: [
                        {title: "محاضرة 1", url: "https://vz-99e5c202-ca5.b-cdn.net/2414378d-0a9b-4de1-88d2-7279dacac70b/1080p/video.m3u8"},
                        {title: "محاضرة 2", url: "https://vz-99e5c202-ca5.b-cdn.net/2eec9771-a153-4fec-ad1c-73536702b9df/1080p/video.m3u8"},
                        {title: "محاضرة 3", url: "https://vz-99e5c202-ca5.b-cdn.net/02923885-9386-4ac3-bc44-fbf527407006/1080p/video.m3u8"},
                        {title: "محاضرة 4", url: "https://vz-99e5c202-ca5.b-cdn.net/59e2edde-97ec-4f01-9143-c26f42642321/1080p/video.m3u8"},
                        {title: "محاضرة 5", url: "https://vz-99e5c202-ca5.b-cdn.net/03c0c583-26db-48c2-9ef6-5a353471fe54/1080p/video.m3u8"},
                        {title: "محاضرة 6", url: "https://vz-99e5c202-ca5.b-cdn.net/66660390-3cac-4582-bf2b-90eb62719a03/1080p/video.m3u8"},
                
                    ]
                },
                {
    id: 702,
    name: "الاستفهام 2026",
    lectures: [
        {title: "استفهام 1", url: "https://vz-99e5c202-ca5.b-cdn.net/81bbefa8-4140-4813-a7ad-4cde88757689/720p/video.m3u8"},
        {title: "استفهام 2", url: "https://vz-99e5c202-ca5.b-cdn.net/6757a3de-75d2-4d8d-8aea-d1b4b6d886d0/720p/video.m3u8"},
        {title: "محاضرة 3 - همزة التسوية", url: "https://vz-b26dd76f-dc1.b-cdn.net/9dba7736-4ce3-42b5-8cc7-f00eca59327d/720p/video.m3u8"},
        {title: "محاضرة 4 : تحويل الاستفهام من نوع لآخر", url: "https://vz-b26dd76f-dc1.b-cdn.net/84ef5d65-4b7f-44ec-ac33-c9c4f96579d7/720p/video.m3u8"},
        {title: "محاضرة 5 : صيغ الأسئلة الوزارية الخاصة بـ (أنواع الاستفهام)", url: "https://vz-b26dd76f-dc1.b-cdn.net/3759fbd7-f1f3-40b4-9002-19fb223707bc/720p/video.m3u8"},
        {title: "المحاضرة 6 : حل أسئلة الاستفهام الوزارية (الجزء الأول)", url: "https://vz-b26dd76f-dc1.b-cdn.net/cfd68ddf-650c-4807-9632-abf15ec29b98/720p/video.m3u8"},
        ]
        },
                {
                    id: 703,
    name: "الادب الحديث (الفصل الاول)",
    lectures: [
        {title: "محاضرة 1 : الادب الحديث", url: "https://vz-b26dd76f-dc1.b-cdn.net/64abbd52-68ad-45fd-8631-146ede3b35c3/720p/video.m3u8"},
        {title: "محاضرة 2 : الشعر الحديث", url: "https://vz-b26dd76f-dc1.b-cdn.net/49e4ff04-f221-46e4-b805-ab4fe687a6aa/720p/video.m3u8"},

        ]
                }
            ]
        },
        {
                    id: 8,
            name: "أ.هشام المعموري",
            subject: "عربي - السادس الإعدادي",
            lecturesCount: 2026,
            image: "Arabic2.png",
            chapters: [
                {
                    id: 801,
                    name: "الاساسيات",
                    lectures: [
                        {title: "محاضرة 1", url: "https://vz-99e5c202-ca5.b-cdn.net/54cbcb8a-12db-4895-b44b-3f0f82e3ec12/1080p/video.m3u8"},
                        {title: "محاضرة 2", url: "https://vz-99e5c202-ca5.b-cdn.net/8c2d5271-85be-4618-af61-1c08dd057076/1080p/video.m3u8"},
                        {title: "محاضرة 3", url: "https://vz-99e5c202-ca5.b-cdn.net/bde728cf-be21-4fa5-986d-8f920be941d0/1080p/video.m3u8"},
                        {title: "محاضرة 4", url: "https://vz-99e5c202-ca5.b-cdn.net/9cce2e3f-02db-4c2a-bc86-5de6ae9b737f/1080p/video.m3u8"},
                        {title: "محاضرة 5", url: "https://vz-99e5c202-ca5.b-cdn.net/5be7c60e-72d7-4889-b9cc-00b5eb0c4925/1080p/video.m3u8"},
                        {title: "محاضرة 6", url: "https://vz-99e5c202-ca5.b-cdn.net/e6af4501-07a4-4793-8514-77589bde9817/1080p/video.m3u8"},
                        {title: "محاضرة 7", url: "https://vz-99e5c202-ca5.b-cdn.net/5e687bfc-3ed6-4e9a-96ea-1f697172ae3e/1080p/video.m3u8"},
                        {title: "محاضرة 8", url: "https://vz-99e5c202-ca5.b-cdn.net/1128dacd-ab91-4c37-8516-ba3c27ef6333/1080p/video.m3u8"},
                        {title: "محاضرة 9", url: "https://vz-99e5c202-ca5.b-cdn.net/4bcff57b-208f-4998-888e-32450ca6fecc/1080p/video.m3u8"},
                        {title: "محاضرة 10", url: "https://vz-99e5c202-ca5.b-cdn.net/27d1c2fc-aea2-4805-9058-8e95d44a9859/1080p/video.m3u8"},
                        {title: "محاضرة 11", url: "https://vz-99e5c202-ca5.b-cdn.net/0e88b3de-f003-4963-ac0a-7411c933dc1f/1080p/video.m3u8"},
                    ]
                },
                {
    id: 802,
    name: "اسلوب الاستفهام",
    lectures: [
        {title: "محاضرة 1", url: "https://vz-99e5c202-ca5.b-cdn.net/e774c265-4a30-4b72-bc9a-97689fd61b9a/720p/video.m3u8"},
        {title: "محاضرة 2", url: "https://vz-99e5c202-ca5.b-cdn.net/f1a5241b-45a3-4e20-99a5-04ea44fb8d8b/720p/video.m3u8"},
        {title: "محاضرة 3 : دلالات اسماء الاستفهام - الجزء الثاني", url: "https://vz-b26dd76f-dc1.b-cdn.net/d1999f94-eb76-4c2a-b3fa-65feb156bac9/720p/video.m3u8"},
        {title: "المحاضرة 4 : أنواع الاستفهام", url: "https://vz-b26dd76f-dc1.b-cdn.net/b4855f35-0325-4144-adfd-1d027781a374/720p/video.m3u8"},
        {title: "المحاضرة 5 : أنواع (أم)", url: "https://vz-b26dd76f-dc1.b-cdn.net/e4c5574b-39a9-4918-b98f-687a1938f6d9/720p/video.m3u8"},
        ]
        },
                {
                    id: 803,
    name: "الادب الحديث (الفصل الاول)",
    lectures: [
        {title: "المحاضرة 1 : الادب الحديث", url: "https://vz-b26dd76f-dc1.b-cdn.net/5faa5837-6207-4564-8da4-3e8645d6368c/720p/video.m3u8"},
        {title: "المحاضرة 2 : الشعر الحديث ومدرسة الاحياء", url: "https://vz-b26dd76f-dc1.b-cdn.net/edddea04-8b1e-4fff-91c5-be0ba36e88bb/720p/video.m3u8"},
        {title: "المحاضرة 3 : محمد سعيد الحبوبي", url: "https://vz-b26dd76f-dc1.b-cdn.net/d02f4737-5649-49b6-aac0-30f9b1463783/720p/video.m3u8"},

        ]
                }
            ]
        },


{
    id: 9,
    name: "حسين الهاشمي 2025",
    subject: "الكيمياء - السادس الإعدادي",
    lecturesCount: 2025,
    image: "chemistry3.png",
    chapters: [
        {
            id: 901,
            name: "الفصل الاول: الثرموداينمك",
            lectures: [
        {
                title: "محاضرة 1",
                url: "https://vidcdn.akamai-cdn-delivery.com/cdn/spmP4Cwd5lo1hzqLz8ZsyQFnxOCK2ya3_1080p.mp4"
                },
                {
                    title: "محاضرة 2",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/y7A4XJmRuzmmbdz4FRTzEWet6DCjfd84_1080p.mp4"
                },
                {
                    title: "محاضرة 3",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/CUFMtmZr0RJcM9hOhulW1w2i5DgbOnAP_1080p.mp4"
                },
                {
                    title: "محاضرة 4",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/iPDCaqItYzG71GjXi2jIqDZiPXmqBVkT_1080p.mp4"
                },
                {
                    title: "محاضرة 5",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/oYACKGfhxRcgEuIPHh4UX0IM4IbU6U8i_720p.mp4"
                },
                {
                    title: "محاضرة 6",
                    "url": "https://vidcdn.akamai-cdn-delivery.com/cdn/qIn5lICV15WA1RamXPnA8HsvHn4v0sEn_1080p.mp4"
                },
                {
                    title: "محاضرة 7",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/CGDiuaqylpGp3aKmY3NUi6h9Nunto86z_1080p.mp4"
                },
                {
                    title: "محاضرة 8",
                    "url": "https://vidcdn.akamai-cdn-delivery.com/cdn/KuD3lzVsZEuhYS1Nj0INQdsIFapJxjgC_1080p.mp4"
                },
                {
                    title: "محاضرة 9",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/Cy8PdEKGO5oD5cHTUu0d2HfCSMigFoza_1080p.mp4"
                },
                {
                    title: "محاضرة 10",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/lA50o3YXDxIkv383bYgnefb1v6LmwvvU_1080p.mp4"
                },
                {
                    title: "محاضرة 11",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/097CPkGG1jXzpWsAkr5Rv9snPIU1aN1e_1080p.mp4"
                },
                {
                    title: "محاضرة 12",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/pa6g8kRPY7zfOLDm7dOFjf9CCdkTurW7_1080p.mp4"
                },
                {
                    title: "محاضرة 13",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/P9uv2z6H4Mndcvw1p2ua15bhiJTEXVhI_1080p.mp4"
                },
                {
                    title: "محاضرة 14",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/7Ku1JrMPCw5awqDhugEN8lo07gn2auuG_1080p.mp4"
                },
                {
                    title: "محاضرة 15",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/li5B2o9YmKrcWhTn2tDVKxxaBKW4nLLz_1080p.mp4"
                },
                {
                    title: "محاضرة 16",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/5EixVeOe758Jk1mbhbZYeqsH2eVwgRch_1080p.mp4"
                },
                {
                    title: "محاضرة 17",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/5zGj7UpaNSVAGUvyH4OpuuUayh7q1nmk_1080p.mp4"
                },
                {
                    title: "محاضرة 18",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/Ex4hipPKhF0KwFtMrdbZVody7d6mCKQ2_720p.mp4"
                },
                {
                    title: "محاضرة 19",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/iqrYmhvuMupHjSKezLtpWw0vsfnx8CCU_1080p.mp4"
                },
                {
                    title: "محاضرة 20",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/qtba2AFMNXPK8im3Hl5WIS03rbJ9PyUE_1080p.mp4"
                },
                {
                    title: "محاضرة 21",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/1EhDodwqWH5GGRhrCdaMpvKGXByJjh8r_1080p.mp4"
                },
                {
                    title: "محاضرة 22",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/B9UZERNp5gNqcCGh94CZfYligNG22Tfs_1080p.mp4"
                },
                {
                    title: "محاضرة 23",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/CmRM3Wlwsx9CYtvOm0kFrF4YzP0b1Vqg_1080p.mp4"
                },
                {
                    title: "محاضرة 24",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/xKJSy3sD4NXUnC9fOy9tC6hF1Jd3O4Dm_1080p.mp4"
                },
                {
                    title: "محاضرة 25",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/cDsP8RZWzb5BLTidIJpbbmiV0ZoFbDRD_720p.mp4"
                },
                {
                    title: "محاضرة 26",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/8c5q6jsYdKn2iJmsZtp5RFRIOT6qq8Qc_1080p.mp4"
                },
                {
                    title: "محاضرة 27",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/8gNAs8brzj59fGKHQBIQVXzYox08k50O_1080p.mp4"
                },
                {
                    title: "محاضرة 28",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/ytAO4AkBtWY4nMUx05i9QzcUU58qYFU6_720p.mp4"
                },
                {
                    title: "محاضرة 29",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/y492B6G6PW2rXPZsOrmK1YiTPY5onAxZ_1080p.mp4"
                },
                {
                    title: "محاضرة 30",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/Z7pAC2htIBwIQSQONm7E8CQ62VNH73gZ_1080p.mp4"
                },
                {
                    title: "محاضرة 31",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/1hkWyv48HJZmNH3Ckde7JxFJvXVXuj2V_720p.mp4"
                },
                {
                    title: "محاضرة 32",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/iagx98Thp2dmE4mvCsWWshCgFbGmnxkp_1080p.mp4"
                },
                {
                    title: "محاضرة 33",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/vVnMCUDd1vqa5ugW66ssiIh22COkTrmi_720p.mp4"
                },
                {
                    title: "محاضرة 34",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/LAEGFX04BF22whMkv8tZaNqtWTfkRnEa_720p.mp4"
                },
                {
                    title: "محاضرة 35",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/73OsRgjdHDdzdYBS8XgIXV4vIH47Vijr_720p.mp4"
                },
                {
                    title: "محاضرة 36",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/4qUgKt8oIoXYNGciOD43XIay3aGRBbSR_720p.mp4"
                }
            ]
        },
        {
            id: 902,
            name: "مراجعة الفصل الاول",
            lectures: [
                {
                    title: "محاضرة 1",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/2IsJ2bXs1AAAsI8tLvyQcGdZEbY4TKfe_720p.mp4"
                },
                {
                    title: "محاضرة 2",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/JUeq3GZ2zwrzVklFl3IWBWWnFTXTtoVI_720p.mp4"
                },
                {
                    title: "محاضرة 3",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/ixAG7SVMvkWwe2GP73i5a29fIGouSojy_720p.mp4"
                },
                {
                    title: "محاضرة 4 سؤال اثرائي",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/vaKCZYjaJKn3SbY274swoCRNq1dwDB4b_720p.mp4"
                },
                {
                    title: "محاضرة 5",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/j1oPv364i1R6RyusA8sIlqHMqIeNb3LH_720p.mp4"
                },
                {
                    title: "مراجعة الفصل الاول الى علاقة كبس",
                    url: "https://9bf9f797be0a4677a8-akamai-cdn.com/4/816ec9a6-5ad9-4d37-81e8-60d252702ade.smil/501f6198-9ab5-47cc-b8dc-fa21ffb324ce/media-3/stream.m3u8"
                }
            ]
        },
        {
            id: 903,
            name: "الفصل الثاني: الاتزان الكيميائي",
            lectures: [
                {
                    title: "محاضرة 1",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/VdTJ4tuG1ClcYp3GNyHQnXsVFjC7ZCoW_1080p.mp4"
                },
                {
                    title: "محاضرة 2",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/Ry09G0ay8SNRkC9E0DhFcz94HNL49sNG_720p.mp4"
                },
                {
                    title: "محاضرة 3",
                    url: "https://9bf9f797be0a4677a8-akamai-cdn.com/18/0311053d-4cc7-4be5-acee-bd9362c27131.smil/9e80e65a-cf09-405d-81ad-f81c26cf714d/media-4/stream.m3u8"
                },
                {
                    title: "محاضرة 4",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/3slsFdagXw9f7BEOxrRmQYF4d1FjpNIC_720p.mp4"
                },
                {
                    title: "محاضرة 5",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/624EvDPhtdPIkig92Q8eS8XvJYymdnu4_720p.mp4"
                },
                {
                    title: "محاضرة 6",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/vhW2RuyCLYeTIyUiYkUCUkHUwODH0rdt_720p.mp4"
                },
                {
                    title: "محاضرة 7",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/EVqKytOkSzdC1P9OGbJIqvReQmr73yHj_720p.mp4"
                },
                {
                    title: "محاضرة 8",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/rlFhI3a7Jmc1VNkuQmYa4e3M2gmvYyrL_720p.mp4"
                },
                {
                    title: "محاضرة 9",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/ZhHla8CTn95bkzkHYE6HzxjQrDnLCjvJ_720p.mp4"
                },
                {
                    title: "محاضرة 10",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/Q4DkuobETkzsTphN7Y7qfUTDnB5OBrxx_720p.mp4"
                },
                {
                    title: "محاضرة 11",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/11s7iHM1SuCiprHmXa8GmMvE4M8XqCH5_720p.mp4"
                },
                {
                    title: "محاضرة 12",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/VkApETEbXPfKt063h1GcHLqmrb8gzNsZ_720p.mp4"
                },
                {
                    title: "محاضرة 13",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/VkApETEbXPfKt063h1GcHLqmrb8gzNsZ_720p.mp4"
                },
                {
                    title: "محاضرة 14",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/pfhlcls59ZSTae8RnClax0Xt0dCLaOam_720p.mp4"
                },
                {
                    title: "محاضرة 15",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/kx56f3oSPGJa1fAPBQMnhkw48Xy798Ls_720p.mp4"
                }
            ]
        }
    ]
},






        {
    id: 10,
    name: "سالم المنصور 2025",
    subject: "الاحياء - السادس الإعدادي",
    lecturesCount: 2026,
    image: "biology1.png",
    chapters: [
        {
            id: 1001,
            name: "الفصل الاول : الخلية",
            lectures: [
                {
                    title: "محاضرة 1",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/8gEcepR9mLCI8UzDc90JtKzd9NmbgfHK_720p.mp4"
                },
                {
                    title: "محاضرة 2",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/bhB97JX7mg4JUyghzgThkLMuNnudTTPO_720p.mp4"
                },
                {
                    title: "محاضرة 3",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/qgvVFg6pAVWHqdMITRUs21elj8FzM118_720p.mp4"
                },
                {
                    title: "محاضرة 4",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/rIHkrxgLK25PhmTH3tVlp0VZ9vVlKCNt_720p.mp4"
                },
                {
                    title: "محاضرة 5",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/jjr51qlyJhHuq6M9ZuC7bVxhMG0fBV5V_720p.mp4"
                },
                {
                    title: "محاضرة 6",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/w6Q0LTFKHJAWQh8lCdQST32XzPv6nrF1_720p.mp4"
                },
                {
                    title: "محاضرة 7",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/OT49VSzaWzHTZ0Htrhh6CgOVGLeoarbS_720p.mp4"
                },
                {
                    title: "محاضرة 8",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/eZaxcKreTsrAX3o3qA3p9NtAnLVqF9Hl_720p.mp4"
                },
                {
                    title: "محاضرة 9",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/VuCRJWkUWsf7m0qMvi5bdg5p72EJ9je4_720p.mp4"
                },
                {
                    title: "محاضرة 10",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/UKcBtqKQE9JnbSpBfbN15Q6yHaHh4jga_720p.mp4"
                },
                {
                    title: "محاضرة 11",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/F5OCtsITVjy9R4MuatbRy838MBfiNnvn_720p.mp4"
                },
                {
                    title: "محاضرة 12",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/jtzBakMwXynNUr6297ksCJypql1G2AYY_720p.mp4"
                },
                {
                    title: "محاضرة 13",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/VglYbADWJTI4dSxprv6X2qI57BqbUGsT_720p.mp4"
                },
                {
                    title: "محاضرة 14",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/Z9tNhKJiq3XgWzJBbWfdipWHUmFwdcDo_720p.mp4"
                },
                {
                    title: "محاضرة 15",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/gP1ZZQ8lyvAn4JlgRQS657KSkhoxNJ8g_720p.mp4"
                }
            ]
        },
        {
            id: 1002,
            name: "الفصل الثاني : الانسجة",
            lectures: [
                {
                    title: "محاضرة 1",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/oP2YHrRLGoaNeULUB5wrxyZ5O4pIybIb_720p.mp4"
                },
                {
                    title: "محاضرة 2",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/fVMtJ1FNsGM4KIUpUFFvCPeWvwOgpAwL_720p.mp4"
                },
                {
                    title: "محاضرة 3",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/YCiJNqCqxK4UcXF18yeIolE0ASNPBs2M_720p.mp4"
                },
                {
                    title: "محاضرة 4",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/MEJ4pNw7wg56jDIhB8CWcY0TRDpGEfKR_720p.mp4"
                },
                {
                    title: "محاضرة 5",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/voTdzSUgS7nrcmgw9Qrw3LENMtmP5BrP_720p.mp4"
                },
                {
                    title: "محاضرة 6",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/6ZLyEs3BG1KUFk4uQ1CRTvMsAsLCEGSU_720p.mp4"
                },
                {
                    title: "محاضرة 7",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/9etwZKq7nx9CE0q3Y3ybKXTmrYV09iKC_720p.mp4"
                },
                {
                    title: "محاضرة 8",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/GvWHAqRd9zNCO9XhuNG3HUyzdyiuAKzi_720p.mp4"
                },
                {
                    title: "محاضرة 9",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/PigRnAeuoqDVoFFG9YuE4J4Pi9mSQWS6_720p.mp4"
                },
                {
                    title: "محاضرة 10",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/ekuFuBEyguznXBhos5nNGLNwTIUYXlRu_720p.mp4"
                },
                {
                    title: "محاضرة 11",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/ptR1V3EzcDFOK7eq2EARiOhRnDvJHyG9_720p.mp4"
                },
                {
                    title: "محاضرة 12",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/0bwtiwwq5ftbn1gxzdcijA4mCXn53908_720p.mp4"
                }
            ]
        },
        {
            id: 1003,
            name: "الفصل الثالث : التكاثر",
            lectures: [
                {
                    title: "محاضرة 1",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/LIap88xBXJsZF4NOI6HMuxfcEpJ4H0Vf_720p.mp4"
                },
                {
                    title: "محاضرة 2 جزء اول",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/FZjR1Nhj9h2kdgeBzKddBUqMIhMlegsK_720p.mp4"
                },
                {
                    title: "محاضرة 2 جزء ثاني",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/7NSd2Eg4k0TOawoaU4GYwp4wvOcOJxfN_720p.mp4"
                },
                {
                    title: "محاضرة 3",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/M2ON4nEuHR7nKKNoF6dROL1wcSb2jV6K_720p.mp4"
                },
                {
                    title: "محاضرة 4",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/I5OQdlo1G3kQWTXqwcQOTvgstPXJBrmN_720p.mp4"
                },
                {
                    title: "محاضرة 5",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/vQeoo21E7mqmjiyYH50w46TMnS3qGABM_720p.mp4"
                },
                {
                    title: "محاضرة 6",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/W4pFOzFlNTGtXlsXUPLMHkY7ZBlnxMEe_720p.mp4"
                },
                {
                    title: "محاضرة 7",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/LajwNT8zyGoFG5MZYpva7EiFx6ZnX6Hb_720p.mp4"
                },
                {
                    title: "محاضرة 8",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/I5DocfCIRYXV4uTxKOGiyU2eePRd5anX_720p.mp4"
                },
                {
                    title: "محاضرة 9",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/o0NUGeVa0c0tVQevVOGqXOX3fSnYxiAd_720p.mp4"
                },
                {
                    title: "محاضرة 10",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/UKSyxYEEXMsnP6f6efByncYZzAXKr8J5_720p.mp4"
                },
                {
                    title: "محاضرة 11",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/zoEgNuqxyBAYnGrM1ydr63zV5BCZaRkl_720p.mp4"
                },
                {
                    title: "محاضرة 12",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/hwXWw6riwPNSvdYtRTIvluxgm3acUMw7_720p.mp4"
                },
                {
                    title: "محاضرة 13",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/nkelmLmgXnk48ZA4lbo8NYdBeVaoF4gk_720p.mp4"
                },
                {
                    title: "محاضرة 14",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/1j6nNkHcWo4ZZ7LiUkYHvs4j6FXvXggv_720p.mp4"
                },
                {
                    title: "محاضرة 15",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/0Up39LkTkytCuDhKOO1uHMJwTiPMISVl_720p.mp4"
                },
                {
                    title: "محاضرة 16",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/3F7ipmZnQ7YipTuCl9NM9szfPP4M5tfg_720p.mp4"
                },
                {
                    title: "محاضرة 17",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/5TXEfc3Xugm8SntiXC7lrD5SLMPKdbPo_720p.mp4"
                },
                {
                    title: "محاضرة 18",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/kw7mFQNxWI3QKYcSAqyZB4F8utj1xXVW_720p.mp4"
                },
                {
                    title: "محاضرة 19 جزء اول",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/kt4n9vSxTWDpaNsm1Snt8EqJv6mFVfoX_720p.mp4"
                },
                {
                    title: "محاضرة 19 جزء ثاني",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/R2NUr2t0BLryGkXPVwZemxLdht9Nu0su_720p.mp4"
                },
                {
                    title: "محاضرة 20",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/2uH3wPUPtWYCbuNd0leilDtw3V5OImcP_720p.mp4"
                },
                {
                    title: "محاضرة 21",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/yZKQfvG7d1GHRsuucdITaFSJWAEEqt9j_720p.mp4"
                }
            ]
        },
        {
            id: 1004,
            name: "الفصل الرابع : التكوين الجنيني",
            lectures: [
                {
                    title: "محاضرة 1",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/lNk8oATYwONwdUdFQUNqqnQQyCGFs0Xq_720p.mp4"
                },
                {
                    title: "محاضرة 2",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/zvUtn7YOjca3Od2IyTWbHoKf6IUZ4C8i_720p.mp4"
                },
                {
                    title: "محاضرة 3",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/3seVQmHXmrYrB1DCQWecQm1RhPyboKDE_720p.mp4"
                },
                {
                    title: "محاضرة 4",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/d5LamSYGWmOmpVmXarupe7pT3gO8X5dC_720p.mp4"
                },
                {
                    title: "محاضرة 5",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/M3UFPRiMGoA9CTVk3tCGMzmufOv0uPjx_720p.mp4"
                },
                {
                    title: "محاضرة 6",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/miMRw9C1kTOyFOxO3BABG2pnf578QNIz_720p.mp4"
                },
                {
                    title: "محاضرة 7",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/4Yy29vjMKZZToBovp7n5McaMIRbPVlYL_720p.mp4"
                },
                {
                    title: "محاضرة 8",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/V4QKZZMAgdO2JyHHlb2TOW6WnVCMosBN_720p.mp4"
                },
                {
                    title: "محاضرة 9",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/0u79HHEbEm22uFlQS0XeQjhOm91UaheR_720p.mp4"
                }
            ]
        },
        {
            id: 1005,
            name: "اساسيات علم الوراثة",
            lectures: [
                {
                    title: "محاضرة 1",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/VwEG3w60YLcxfpB8a0ORBO2lsBPVKYEr_720p.mp4"
                },
                {
                    title: "محاضرة 2",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/mA8Zi52h72XEm8hqFPQjLb0oHP26NEZp_720p.mp4"
                },
                {
                    title: "محاضرة 3",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/UJt2cGYJzypD6tqeepivDI7rkQi5Bsng_720p.mp4"
                },
                {
                    title: "محاضرة 4",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/S5Pp2jq1H6e3jmmxdpPFXRdGuRrprt3t_720p.mp4"
                },
                {
                    title: "محاضرة 5",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/i78lR5kR3G120LvlzbgPAXQxSZngeNdT_720p.mp4"
                },
                {
                    title: "محاضرة 6",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/8wHcKTph91g4wV1N2rQlMK3qidylFg0d_720p.mp4"
                },
                {
                    title: "محاضرة 7",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/7WIwsnbfM28dDsGcHYM6RWzmsBKX5cbK_720p.mp4"
                }
            ]
        },
        {
            id: 1006,
            name: "الفصل الخامس : الوراثة",
            lectures: [
                {
                    title: "محاضرة 1",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/BfoH0jsUkQ85CoE1qOGZPJmK7hd1zL1m_720p.mp4"
                },
                {
                    title: "محاضرة 2",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/gfWyrc1fLbCHsN3SHqmClSMEHSK5eJBU_720p.mp4"
                },
                {
                    title: "محاضرة 3",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/wyEKj5mG8HCimBJHfV8NT7WwLnQBsixz_720p.mp4"
                },
                {
                    title: "محاضرة 4",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/r06s27NTO5upJ4b5Q2UjHqjZ5uTA4ATI_720p.mp4"
                },
                {
                    title: "محاضرة 5",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/Rs5gSVmODrkstJcOVJFCBLLEewgvgkma_720p.mp4"
                },
                {
                    title: "محاضرة 6",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/blQvREXmJaEiqwHLiyxGTpv60IU3N7bB_720p.mp4"
                },
                {
                    title: "محاضرة 7",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/1uIEa9OoMqQOnS16C4wEs1EEs4S3fR9T_720p.mp4"
                },
                {
                    title: "محاضرة 8",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/bpoQQT6mqn5gRmjDqeipq4hylAE09EAH_720p.mp4"
                },
                {
                    title: "محاضرة 9",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/SZJ1WcLc6rpVEvCVjlcWnvYNDB52JeII_720p.mp4"
                },
                {
                    title: "محاضرة 10",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/qWdiLlmKlgfIJS3dhREEBUWclSkdDxAu_720p.mp4"
                },
                {
                    title: "محاضرة 11",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/uAumxz1QNK1ImVMUpVSleeIU2G7shanT_720p.mp4"
                },
                {
                    title: "محاضرة 12",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/ate4W3Gy80OlmTYzveWH7AIYpA3GfMha_720p.mp4"
                },
                {
                    title: "محاضرة 13",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/jUCsLxxR5cdaO8yFkfotBe3Xd329I9ER_720p.mp4"
                },
                {
                    title: "محاضرة 14",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/tCtG92tx0aalZbrNAnRAWZ06XatI34ac_720p.mp4"
                },
                {
                    title: "محاضرة 15",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/kRTsd4sHroRXK5wsNDXBt1A4vEuF8c3X_720p.mp4"
                },
                {
                    title: "محاضرة 16",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/7jLrKVcBhl8d3K1Qt2dkANcB1P5H9Ryw_720p.mp4"
                },
                {
                    title: "محاضرة 17",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/6DvbHm980M229GUGOHLHXTw04RgotR5d_720p.mp4"
                },
                {
                    title: "محاضرة 18",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/jTu59lJL3AI9pVbKkZVycCz96jP3BlI0_720p.mp4"
                },
                {
                    title: "محاضرة 19",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/7uXCkFOywsDISwTDKw645Cd9ZlIG6GvU_720p.mp4"
                },
                {
                    title: "محاضرة 20",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/okdmYGq8FQ8E6WpWRWpNLjPFUvhVxtaf_720p.mp4"
                },
                {
                    title: "محاضرة 21",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/ZEq5SUDRoPheRt0CF2kyBx7FvigTorM7_720p.mp4"
                },
                {
                    title: "محاضرة 22",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/OcmtBGeJRtxbiA1U8uZVwYFSvvb0HPNV_720p.mp4"
                },
                {
                    title: "محاضرة 23",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/AHLQ9NvYrifM0VtXt1v29ldnoq0ePpT9_720p.mp4"
                },
                {
                    title: "محاضرة 24 جزء اول",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/dafhD2SPBOzfivxFm6Y2War3hVRRq5wH_720p.mp4"
                },
                {
                    title: "محاضرة 24 جزء ثاني",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/Z7DqkWX6HX2zo7odpG2PqoUJn6LOX48L_720p.mp4"
                },
                {
                    title: "محاضرة 25",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/wrw1YXQaC910wRIlNv1UesmnoLMgNkxM_720p.mp4"
                },
                {
                    title: "محاضرة 26",
                    url: "https://vidcdn.akamai-cdn-delivery.com/cdn/9wYp9FdyVKWtakoolTbZRH85yrrLZyr2_720p.mp4"
                },
               {
               title: "محاضرة 27",
               url: "https://vidcdn.akamai-cdn-delivery.com/cdn/v7hwXTM0d2ohNStKMKRaZI1pg3V7PhYy_720p.mp4"
               },
               {
               title: "محاضرة 28",
               url: "https://vidcdn.akamai-cdn-delivery.com/cdn/Wb4HsRbxjmXxdHqN7ggdlRCcREAq1Me2_720p.mp4"
               },
               {
               title: "محاضرة 29",
               url: "https://vidcdn.akamai-cdn-delivery.com/cdn/R1Z8BjO12o76zouo2dKaN9GFYqXb68Mw_720p.mp4"
               },
               {
               title: "محاضرة 30",
               url: "https://vidcdn.akamai-cdn-delivery.com/cdn/4oPM22xLP7UzYYFRtXDDDRthPRAdtbhj_720p.mp4"
               },
               {
               title: "محاضرة 31",
               url: "https://vidcdn.akamai-cdn-delivery.com/cdn/ekMXTHejpnYQzADnahSrrK1donLAjaXl_720p.mp4"
               },
               {
               title: "محاضرة 32",
               url: "https://vidcdn.akamai-cdn-delivery.com/cdn/iqN6jpMSpXKBlYKaAwIv2pVuKLKEhAjb_720p.mp4"
               },
               {
               title: "محاضرة 33",
               url: "https://vidcdn.akamai-cdn-delivery.com/cdn/B4GQWC9uYvrBqTqhs4vTgIg3MBY3OiJ4_720p.mp4"
               },
               {
               title: "محاضرة 34",
               url: "https://vidcdn.akamai-cdn-delivery.com/cdn/1FVg9WkAx6DLe7XIvpkb35KBYmm1xYYi_720p.mp4"
               },
               {
               title: "محاضرة 35",
               url: "https://vidcdn.akamai-cdn-delivery.com/cdn/jcFR3iv1A7sTQuIqNJrltEqKhKL06MML_720p.mp4"
               },
               {
               title: "محاضرة 36",
               url: "https://vidcdn.akamai-cdn-delivery.com/cdn/wes6JDffVL19ORIR5duYpRddEvRticUC_720p.mp4"
               },
               {
               title: "محاضرة 37",
               url: "https://vidcdn.akamai-cdn-delivery.com/cdn/Z2gYYpXwQq0feX5enS46GsAoo29U21he_720p.mp4"
               },
               {
               title: "محاضرة 38",
               url: "https://vidcdn.akamai-cdn-delivery.com/cdn/RCTcrNDtDtq4sF26PzkagkYVDNt5dsuU_720p.mp4"
               },
]
                }
            ]
        },


                   
        
        {
                    id: 15,
            name: "أ.نورس الموسوي",
            subject: "احياء - السادس الإعدادي",
            lecturesCount: 2026,
            image: "Biology.jpg",
            chapters: [
                {
                    id: 1501,
                    name: "المقدمة",
                    lectures: [
                        {title: "المحاضرة التعريفية", url: "https://vz-99e5c202-ca5.b-cdn.net/caadbdff-8861-4ac2-9bff-083dfe171752/1080p/video.m3u8"},
                        {title: "تقسيمات منهج الاحياء", url: "https://vz-99e5c202-ca5.b-cdn.net/d2873133-0933-402f-86bf-17125efbdf3b/1080p/video.m3u8"},
                
                    ]
                },
                {
    id: 1502,
    name: "الفصل الاول - الخلية",
    lectures: [
        {title: "محاضرة 1", url: "https://vz-99e5c202-ca5.b-cdn.net/4a8313b5-f032-4868-bb91-df3202078817/1080p/video.m3u8"},
        {title: "محاضرة 2", url: "https://vz-99e5c202-ca5.b-cdn.net/0b33b9e6-0263-4d8f-b536-f757cc81b28d/1080p/video.m3u8"},
        {title: "محاضرة 3", url: "https://vz-99e5c202-ca5.b-cdn.net/f70fc1b9-3f9f-4969-8148-fb5f3c17d23d/1080p/video.m3u8"},
        {title: "محاضرة 4", url: "https://vz-b26dd76f-dc1.b-cdn.net/7484dc7e-43ca-4139-8d4d-86d06c220e6d/720p/video.m3u8"},
        {title: "محاضرة 5", url: "https://vz-b26dd76f-dc1.b-cdn.net/bab2a5c1-4435-4d45-a242-454ef8289324/720p/video.m3u8"},
        {title: "محاضرة 6", url: "https://vz-b26dd76f-dc1.b-cdn.net/7e4b1d89-36f6-418b-91c1-b655b70dcc64/720p/video.m3u8"},
        {title: "محاضرة 7 : الفجوات والمحتويات الغير حية", url: "https://vz-b26dd76f-dc1.b-cdn.net/7e244e05-3916-4757-92b1-43f505d202f5/720p/video.m3u8"},
        {title: "محاضرة 8 : النواة", url: "https://vz-b26dd76f-dc1.b-cdn.net/a2799dd5-58f5-43c3-84c2-771c6afbae5c/720p/video.m3u8"},
        {title: "محاضرة 9 : المراجعة", url: "https://vz-b26dd76f-dc1.b-cdn.net/0db0414a-1bdb-42e5-81b0-f098726a529b/720p/video.m3u8"},
        {title: "محاضرة 10 : الانشطة الخلوية (الانتشار والنفوذية)", url: "https://vz-b26dd76f-dc1.b-cdn.net/09838d77-b03e-4046-9255-b548cfebcd6f/720p/video.m3u8"},
        
        
    
            ]
        }
            ]
        },

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

