package com.ryma.bienetre.backend_bienetre.MoodJournal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MoodEntryService {

    @Autowired
    private MoodEntryRepository moodEntryRepository;

    public MoodEntry saveMoodEntry(MoodEntry moodEntry) {
        return moodEntryRepository.save(moodEntry);
    }
}

