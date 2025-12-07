/**
 * data.js
 * 负责管理用户进度 (目前使用 LocalStorage，未来可无缝切换 Supabase)
 */

const APP_KEY = 'go_game_progress_v1';

const DataManager = {
    // 1. 获取所有课程进度
    getProgress: function() {
        const data = localStorage.getItem(APP_KEY);
        return data ? JSON.parse(data) : {};
    },

    // 2. 保存某一课的分数
    saveScore: function(lessonId, score) {
        let progress = this.getProgress();
        
        // 逻辑：只保存历史最高分
        const currentScore = progress[lessonId] || 0;
        if (score > currentScore) {
            progress[lessonId] = score;
            localStorage.setItem(APP_KEY, JSON.stringify(progress));
            console.log(`第 ${lessonId} 课新纪录: ${score} 分已保存`);
            return true; // 破纪录了
        }
        return false; // 没破纪录
    },

    // 3. 获取某一课的分数
    getLessonScore: function(lessonId) {
        const progress = this.getProgress();
        return progress[lessonId] || 0;
    },

    // 4. 计算总进度 (用于首页进度条)
    getSummary: function(totalLessons) {
        const progress = this.getProgress();
        let passedCount = 0; // 及格 (>=60)
        let perfectCount = 0; // 满分 (100)
        let totalScore = 0;

        for (let i = 1; i <= totalLessons; i++) {
            const s = progress[i] || 0;
            if (s >= 60) passedCount++;
            if (s === 100) perfectCount++;
            totalScore += s;
        }

        return {
            passed: passedCount,
            perfect: perfectCount,
            percent: Math.round((passedCount / totalLessons) * 100)
        };
    },
    
    // 模拟登录（对于本地存储，其实就是检查一下有没有数据）
    login: function() {
        return { username: "本地玩家", isGuest: true };
    }
};