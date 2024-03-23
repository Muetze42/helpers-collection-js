<script setup>
import { data_get } from '@norman-huth/helpers-collection-js/helpers/helpers.js'
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number, null],
    required: true,
    default: null
  },
  type: {
    type: String,
    required: false,
    default: 'text'
  },
  label: {
    type: [String, null],
    required: false
  },
  errors: {
    type: Object,
    required: false,
    default: null
  },
  errorsKey: {
    type: [String, null],
    required: false,
    default: null
  },
  required: {
    type: Boolean,
    required: false,
    default: false
  },
  placeholder: {
    type: [String, null],
    required: false,
    default: null
  },
  pattern: {
    type: [String, null],
    required: false,
    default: null
  }
})
defineEmits(['update:modelValue'])
const fieldErrors = computed(() => {
  if (!props.errorsKey) {
    return null
  }
  return data_get(props.errors, 'errors.' + props.errorsKey)
})
</script>

<template>
  <label class="form-field input-field">
    <slot name="label" />
    {{ label }}
    <input
      :value="modelValue"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :pattern="pattern"
      class="w-full"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <slot name="help" />
    <div v-if="fieldErrors" class="invalid">
      <ul>
        <li v-for="(error, index) in fieldErrors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
  </label>
</template>
